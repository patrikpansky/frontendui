import { ItemActions } from "../Store";

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
 *       groups {
 *          __typename
 *          id
 *          name
 *       }
 *     }
 *   }
 * `;
 *
  * // Create an async action
 * const fetchAction = createAsyncGraphQLAction(
 *   exampleQuery,
 *   processVectorAttributeFromGraphQLResult("groups"),
 *   updateItemsFromGraphQLResult
 * );
 *
 * // Dispatch the action with query variables
 * dispatch(fetchAction({ id: "12345" }));
 */
export const updateItemsFromGraphQLResult = (jsonResult) => (dispatch, /*getState */) => (next) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("GQLQueryAfterFetch: No data found in jsonResult", jsonResult);
        return jsonResult;
    }

    let result = data?.result;

    // Check if `data` has exactly one key and use it as the result
    if (!result && Object.keys(data).length === 1) {
        const singleKey = Object.keys(data)[0];
        result = data[singleKey];
    }

    if (result) {
        if (Array.isArray(result)) {
            result.forEach((item) => {
                dispatch(ItemActions.item_update(item));
            });
        } else {
            dispatch(ItemActions.item_update(result));
        }
    } else {
        if (Object.keys(data).length === 1) {
            console.warn("GQLQueryAfterFetch: result is null", jsonResult);
        } else {
            console.warn("GQLQueryAfterFetch: No valid result found in data", jsonResult);
        }
        
    }

    return next(jsonResult);
};