import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateReadQuery =
`
mutation StateReadQuery($id: UUID!) {
  result: stateById(id: $id) {
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

export const StateReadAsyncAction = createAsyncGraphQLAction(StateReadQuery)