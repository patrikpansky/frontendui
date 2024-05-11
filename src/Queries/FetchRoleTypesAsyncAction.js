import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($limit: Int, $skip: Int, $where: RoleTypeInputWhereFilter) {
  result: roleTypePage(skip: $skip, limit: $limit, where: $where) {
    __typename
    id
    name
  }
}`


export const FetchRoleTypesAsyncAction = CreateAsyncActionFromQuery(query)