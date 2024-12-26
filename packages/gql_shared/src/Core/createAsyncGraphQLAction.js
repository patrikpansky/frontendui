import { createFetchQuery } from "./createFetchQuery";
import { updateItemsFromGraphQLResult } from './updateItemsFromGraphQLResult'

/**
 * Creates a dispatchable async action from a GraphQL query.
 * Supports chaining multiple middleware-like functions for post-fetch processing.
 * @function
 * @param {string} query - The GraphQL query string. Must be a valid, non-empty string.
 * @param {object|Function} [params=updateItemsFromGraphQLResult] - Additional parameters for the query (e.g., headers), 
 * or a middleware function. If it is a middleware function, it is added to the middleware chain.
 * @param {...Function} middlewares - Additional middleware functions to process the result.
 * Each middleware must be a function that returns a higher-order function `(result) => (dispatch, getState) => next(result)`.
 *
 * @see processVectorAttributeFromGraphQLResult
 * @see updateItemsFromGraphQLResult
 * 
 * @returns {Function} A dispatchable async action that processes the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query` is not a string.
 * @throws {Error} If any of the middlewares are not functions.
 * @throws {Error} If the `query_variables` provided to the resulting action are not a valid JSON object.
 *
 * @example
 * const exampleQuery = `
 *   query ExampleQuery($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *     }
 *   }
 * `;
 *
  * // Create an async action
 * const fetchAction = createAsyncGraphQLAction(
 *   exampleQuery,
 *   processVectorAttributeFromGraphQLResult("users"),
 *   updateItemsFromGraphQLResult,
 *   hookGraphQLResult(jsonResult => console.log(jsonResult))
 * );
 *
 * // Dispatch the action with query variables
 * dispatch(fetchAction({ id: "12345" }));
 */
export const createAsyncGraphQLAction_ = (query, params = updateItemsFromGraphQLResult, ...middlewares) => {
    if (typeof query !== "string") {
        throw new Error("createAsyncGraphQLAction: 'query' must be a string.");
    }

    // Validate that all middlewares are functions
    middlewares.forEach((middleware, index) => {
        if (typeof middleware !== "function") {
            throw new Error(`createAsyncGraphQLAction: Middleware at index ${index} is not a function.`);
        }
    });

    // If `params` is a function, treat it as middleware
    if (typeof params === "function") {
        middlewares = [params, ...middlewares]; // Add `params` as middleware and filter nulls
        params = {}; // Reset params to an empty object
    }

    const unparametrizedFetch = createFetchQuery(query, params);

    const result = (query_variables) => {
        if (typeof query_variables !== "object" || query_variables === null) {
            throw new Error("createAsyncGraphQLAction: 'query_variables' must be a valid JSON object.");
        }

        return async (dispatch, getState) => {
            try {
                const jsonResult = await unparametrizedFetch(query_variables);

                const extendedMiddlewares = [...middlewares];
                const chain = extendedMiddlewares.reduceRight(
                    (next, middleware) => (result) => middleware(result)(dispatch, getState)(next),
                    (finalResult) => finalResult // Base case: pass through final result
                );

                // Start the middleware chain
                return chain(jsonResult);
            } catch (error) {
                console.error("createAsyncGraphQLAction: Error during async action execution", error);
                throw error;
            }
        };
    };
    result.query = query
    return result
};

/**
 * Creates an asynchronous GraphQL action with support for middleware chaining.
 * This function executes a GraphQL query, processes the result, and optionally chains additional middlewares.
 *
 * @param {string} query - The GraphQL query string to execute.
 * @param {Function|object} [params=updateItemsFromGraphQLResult2] - A middleware function to process the GraphQL result
 * or an object containing default query parameters.
 * @param {...Function} middlewares - Additional middleware functions to chain.
 *
 * @returns {Function} A middleware-compatible function that:
 *  - Accepts `jsonData` (query variables), `dispatch`, `getState`, and `next`.
 *  - Executes the GraphQL query with `jsonData` as variables.
 *  - Processes the query result through the middleware chain.
 *
 * @example
 * // Example usage with simple middlewares
 * const query = `
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *     }
 *   }
 * `;
 *
 * const logMiddleware = (result) => (dispatch, getState, next) => {
 *     console.log("Log Middleware:", result);
 *     return next(result);
 * };
 *
 * const transformMiddleware = (result) => (dispatch, getState, next) => {
 *     const transformedResult = { ...result, transformed: true };
 *     console.log("Transform Middleware:", transformedResult);
 *     return next(transformedResult);
 * };
 *
 * const asyncAction = createAsyncGraphQLAction2(query, logMiddleware, transformMiddleware);
 * dispatch(asyncAction({ id: "12345" }));
 *
 * // Example usage with action chaining
 * const query2 = `
 *   query GetPosts($userId: ID!) {
 *     posts(userId: $userId) {
 *       id
 *       title
 *     }
 *   }
 * `;
 *
 * const getPostsAction = createAsyncGraphQLAction2(query2, logMiddleware, transformMiddleware);
 * const getUserAndPostsAction = createAsyncGraphQLAction2(query, updateItemsFromGraphQLResult2, getPostsAction);
 * dispatch(getUserAndPostsAction({ id: "12345" }));
 */
export const createAsyncGraphQLAction = (query, params = updateItemsFromGraphQLResult, ...middlewares) => {
    if (typeof query === "function") {
        query = query()
    }

    if (typeof query !== "string") {
        throw new Error("createAsyncGraphQLAction: 'query' must be a string.");
    }

    // Validate that all middlewares are functions
    middlewares.forEach((middleware, index) => {
        if (typeof middleware !== "function") {
            throw new Error(`createAsyncGraphQLAction: Middleware at index ${index} is not a function.`);
        }
    });

    // If `params` is a function, treat it as middleware
    if (typeof params === "function") {
        middlewares = [params, ...middlewares]; // Add `params` as middleware
        params = {}; // Reset params to an empty object
    }

    const unparametrizedFetch = createFetchQuery(query, params);

    return (jsonData) => {
        if (typeof jsonData !== "object" || jsonData === null) {
            throw new Error("createAsyncGraphQLAction: 'query_variables' must be a valid JSON object.");
        }

        // Validate jsonData for known errors
        if (jsonData.hasOwnProperty("error")) {
            return async (dispatch) => {
                console.warn("createAsyncGraphQLAction: 'jsonData' contains an error.", jsonData.error);
                // Optionally dispatch an error-specific action
                dispatch({
                    type: "ASYNC_GRAPHQL_ACTION_ERROR",
                    payload: jsonData.error,
                });
                return Promise.reject(new Error(jsonData.error));
            };
        }

        return async (dispatch, getState, next = (jsonResult) => jsonResult) => {
            try {
                // Fetch the result from the GraphQL query
                const jsonResult = await unparametrizedFetch(jsonData);

                // Check if the server response contains errors
                if (jsonResult.errors && Array.isArray(jsonResult.errors)) {
                    console.error("createAsyncGraphQLAction: Server returned errors.", jsonResult.errors);
                    // Optionally dispatch an error action
                    dispatch({
                        type: "ASYNC_GRAPHQL_ACTION_SERVER_ERROR",
                        payload: jsonResult.errors,
                    });
                    return Promise.reject(jsonResult.errors);
                }

                // Middleware chain
                const chain = middlewares.reduceRight(
                    (nextMiddleware, middleware) => {
                        return async (result) => {
                            return middleware(result)(dispatch, getState, nextMiddleware);
                        };
                    },
                    next // Use the provided `next` as the base case
                );

                // Execute the chain
                return chain(jsonResult);
            } catch (error) {
                console.error("createAsyncGraphQLAction: Error during async action execution", error);
                // Dispatch a general error action
                dispatch({
                    type: "ASYNC_GRAPHQL_ACTION_GENERAL_ERROR",
                    payload: error.message,
                });
                throw error;
            }
        };
    };
};


