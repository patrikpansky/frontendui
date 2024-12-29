import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineInsertMutation =
`
mutation StateMachineInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: statemachineInsert(
    statemachine: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
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

export const StateMachineInsertAsyncAction = createAsyncGraphQLAction(StateMachineInsertMutation)