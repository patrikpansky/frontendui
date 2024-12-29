import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionReadQuery =
`
mutation StateTransitionReadQuery($id: UUID!) {
  result: statetransitionById(id: $id) {
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

export const StateTransitionReadAsyncAction = createAsyncGraphQLAction(StateTransitionReadQuery)