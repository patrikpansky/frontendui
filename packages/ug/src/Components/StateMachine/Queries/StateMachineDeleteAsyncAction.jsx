import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineDeleteMutation =
`
mutation StateMachineDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: statemachineDelete(
    statemachine: {id: $id, lastchange: $lastchange}
  ) {
    ... on StateMachineGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...StateMachineLarge
      }
    }
  }
}

fragment StateMachineLarge on StateMachineGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const StateMachineDeleteAsyncAction = createAsyncGraphQLAction(StateMachineDeleteMutation)