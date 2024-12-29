import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateReadPageQuery =
`
mutation StateReadPageQuery($skip: Int, $limit: Int, $where: StateWhereInputFilter) {
  result: statePage(skip: $skip, limit: $limit, where: $where) {
    ...StateLarge
  }
}

fragment StateLarge on StateGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const StateReadPageAsyncAction = createAsyncGraphQLAction(StateReadPageQuery)