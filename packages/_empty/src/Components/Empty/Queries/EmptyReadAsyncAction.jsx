import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const EmptyReadQuery =
`
query EmptyReadQuery($id: UUID!) {
  result: emptyById(id: $id) {
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

export const EmptyReadAsyncAction = createAsyncGraphQLAction(EmptyReadQuery)