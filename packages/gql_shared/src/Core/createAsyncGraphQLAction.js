import { createFetchQuery } from "./createFetchQuery";
import { updateItemsFromGraphQLResult } from './updateItemsFromGraphQLResult'

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

    return (queryParams) => {
        if (typeof queryParams !== "object" || queryParams === null) {
            throw new Error("createAsyncGraphQLAction: 'query_variables' must be a valid JSON object.");
        }

        return async (dispatch, getState, next = (jsonResult) => jsonResult) => {
            try {
                // Fetch the result from the GraphQL query
                const jsonResult = await unparametrizedFetch(queryParams);

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

                const jsonData = jsonResult?.data
                const values = Object.values(jsonData)
                // console.log("values", values, jsonData)
                if (values.length > 0) {
                    const __typename = values[0]?.__typename
                    if (__typename?.includes("Error"))
                        return Promise.reject(new Error(values[0].msg));
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


