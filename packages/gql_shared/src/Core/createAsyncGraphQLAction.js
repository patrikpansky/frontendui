import { createFetchQuery } from "./createFetchQuery";
import { updateItemsFromGraphQLResult } from './updateItemsFromGraphQLResult'

/**
 * Creates a dispatchable async action from a GraphQL query.
 * Supports chaining multiple middleware-like functions for post-fetch processing.
 * @function
 * @param {string} query - The GraphQL query string. Must be a valid, non-empty string.
 * @param {object|Function} [params=GQLUpdateItemAfterFetchMDLWR] - Additional parameters for the query (e.g., headers), 
 * or a middleware function. If it is a middleware function, it is added to the middleware chain.
 * @param {...Function} middlewares - Additional middleware functions to process the result.
 * Each middleware must be a function that returns a higher-order function `(result) => (dispatch, getState) => next(result)`.
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
 * // Example middlewares
 * const logMiddleware = (result) => (dispatch, getState) => (next) => {
 *   console.log("Middleware log:", result);
 *   return next(result);
 * };
 *
 * const processMiddleware = (result) => (dispatch, getState) => (next) => {
 *   const processedResult = { ...result, processed: true };
 *   return next(processedResult);
 * };
 *
 * // Create an async action
 * const fetchAction = createAsyncGraphQLAction(
 *   exampleQuery,
 *   { headers: { Authorization: "Bearer token" } },
 *   logMiddleware,
 *   processMiddleware
 * );
 *
 * // Dispatch the action with query variables
 * dispatch(fetchAction({ id: "12345" }));
 */
export const createAsyncGraphQLAction = (query, params = updateItemsFromGraphQLResult, ...middlewares) => {
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

    return (query_variables) => {
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
};