import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionReadPageQuery =
`
mutation StateTransitionReadPageQuery($skip: Int, $limit: Int, $where: StateTransitionWhereInputFilter) {
  result: statetransitionPage(skip: $skip, limit: $limit, where: $where) {
    ...StateTransitionLarge
  }
}

fragment StateTransitionLarge on StateTransitionGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const StateTransitionReadPageAsyncAction = createAsyncGraphQLAction(StateTransitionReadPageQuery)