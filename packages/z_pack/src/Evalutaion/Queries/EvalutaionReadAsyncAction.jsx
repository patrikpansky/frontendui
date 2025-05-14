import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionLargeFragment } from "./EvalutaionFragments";

const EvalutaionReadQuery = createQueryStrLazy(
`
query EvalutaionReadQuery($id: UUID!) {
  result: evalutaionById(id: $id) {
    ...EvalutaionLarge
  }
}
`, 
    EvalutaionLargeFragment)

    /**
 * An async action for executing a GraphQL query to read evalutaion entities.
 *
 * This action is created using `createAsyncGraphQLAction` with a predefined `EvalutaionQueryRead` query.
 * It can be dispatched with query variables to fetch data related to evalutaion entities from the GraphQL API.
 *
 * @constant
 * @type {Function}
 *
 * @param {Object} query_variables - The variables for the GraphQL query.
 * @param {string|number} query_variables.id - The unique identifier for the evalutaion entity to fetch.
 *
 * @returns {Function} A dispatchable async action that performs the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query_variables` is not a valid JSON object.
 *
 * @example
 * // Example usage:
 * const queryVariables = { id: "12345" };
 *
 * dispatch(EvalutaionReadAsyncAction(queryVariables))
 *   .then((result) => {
 *     console.log("Fetched data:", result);
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
export const EvalutaionReadAsyncAction = createAsyncGraphQLAction(EvalutaionReadQuery)