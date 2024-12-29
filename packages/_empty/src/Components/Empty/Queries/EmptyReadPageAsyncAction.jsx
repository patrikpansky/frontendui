import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const EmptyReadPageQuery =
`
mutation EmptyReadPageQuery($skip: Int, $limit: Int, $where: EmptyWhereInputFilter) {
  result: emptyPage(skip: $skip, limit: $limit, where: $where) {
    ...EmptyLarge
  }
}

fragment EmptyLarge on EmptyGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const EmptyReadPageAsyncAction = createAsyncGraphQLAction(EmptyReadPageQuery)