import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateDeleteMutation =
`
mutation StateDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: stateDelete(
    state: {id: $id, lastchange: $lastchange}
  ) {
    ... on StateGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...StateLarge
      }
    }
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

export const StateDeleteAsyncAction = createAsyncGraphQLAction(StateDeleteMutation)