import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packLargeFragment } from "./Z_packFragments";

const Z_packReadQuery = createQueryStrLazy(
`
query Z_packReadQuery($id: UUID!) {
  result: z_packById(id: $id) {
    ...Z_packLarge
  }
}
`, 
    Z_packLargeFragment)

    /**
 * An async action for executing a GraphQL query to read z_pack entities.
 *
 * This action is created using `createAsyncGraphQLAction` with a predefined `Z_packQueryRead` query.
 * It can be dispatched with query variables to fetch data related to z_pack entities from the GraphQL API.
 *
 * @constant
 * @type {Function}
 *
 * @param {Object} query_variables - The variables for the GraphQL query.
 * @param {string|number} query_variables.id - The unique identifier for the z_pack entity to fetch.
 *
 * @returns {Function} A dispatchable async action that performs the GraphQL query, applies middleware, and dispatches the result.
 *
 * @throws {Error} If `query_variables` is not a valid JSON object.
 *
 * @example
 * // Example usage:
 * const queryVariables = { id: "12345" };
 *
 * dispatch(Z_packReadAsyncAction(queryVariables))
 *   .then((result) => {
 *     console.log("Fetched data:", result);
 *   })
 *   .catch((error) => {
 *     console.error("Error fetching data:", error);
 *   });
 */
export const Z_packReadAsyncAction = createAsyncGraphQLAction(Z_packReadQuery)