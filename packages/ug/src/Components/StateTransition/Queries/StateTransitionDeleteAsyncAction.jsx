import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionDeleteMutation =
`
mutation StateTransitionDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: statetransitionDelete(
    statetransition: {id: $id, lastchange: $lastchange}
  ) {
    ... on StateTransitionGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...StateTransitionLarge
      }
    }
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

export const StateTransitionDeleteAsyncAction = createAsyncGraphQLAction(StateTransitionDeleteMutation)