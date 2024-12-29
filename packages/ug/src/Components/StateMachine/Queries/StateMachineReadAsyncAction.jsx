import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineReadQuery =
`
mutation StateMachineReadQuery($id: UUID!) {
  result: statemachineById(id: $id) {
    ...StateMachineLarge
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

export const StateMachineReadAsyncAction = createAsyncGraphQLAction(StateMachineReadQuery)