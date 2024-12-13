/**
 * Middleware function for processing GraphQL query results with a custom hook.
 *
 * This middleware allows you to pass a hook function that will be executed with
 * the GraphQL query result (`jsonResult`). The hook function can perform additional
 * processing or side effects based on the query result. After invoking the hook,
 * the middleware passes the result to the next middleware in the chain.
 *
 * @param {Function} hook - A custom hook function to process the GraphQL result.
 *                          The function must accept a single argument: `jsonResult`.
 * @throws {Error} Throws an error if the provided hook is not a function.
 * @returns {Function} A middleware function that processes the GraphQL result.
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
export const hookGraphQLResult = (hook) => {
    if (typeof hook !== "function") throw new Error("hook must be a function");
    return (jsonResult) => (dispatch, /* getState */) => (next) => {
        const hooked = hook(jsonResult);
        return next(hooked);
    };
};
