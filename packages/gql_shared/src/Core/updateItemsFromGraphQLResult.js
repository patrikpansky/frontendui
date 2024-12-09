import { ItemActions } from "../Store";

/**
 * Middleware function for processing GraphQL query results and dispatching item update actions.
 *
 * This middleware processes the JSON result of a GraphQL query, extracts the relevant data,
 * and dispatches actions to update items in the Redux store. If the result contains an array
 * of items, each item is dispatched individually. If the result is a single object, it is
 * dispatched directly. If no valid result is found, a warning is logged.
 *
 * @param {Object} jsonResult - The JSON result from a GraphQL query. Expected to contain a `data` field.
 * @returns {Function} A middleware function that accepts `dispatch` and `next`.
 *
 * @function
 * @example
 * const jsonResult = {
 *   data: {
 *     result: [
 *       { id: 1, name: "Item 1" },
 *       { id: 2, name: "Item 2" }
 *     ]
 *   }
 * };
 *
 * updateItemsFromGraphQLResult(jsonResult)(dispatch, getState)(next);
 */
export const updateItemsFromGraphQLResult = (jsonResult) => (dispatch, /*getState */) => (next) => {
    const data = jsonResult?.data;

    if (!data) {
        console.warn("GQLQueryAfterFetch: No data found in jsonResult");
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
        console.warn("GQLQueryAfterFetch: No valid result found in data");
    }

    return next(jsonResult);
};