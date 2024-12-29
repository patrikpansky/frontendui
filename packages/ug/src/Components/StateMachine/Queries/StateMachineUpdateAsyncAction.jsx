import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineUpdateMutation =
`
mutation StateMachineUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: statemachineUpdate(
    statemachine: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on StateMachineGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...GroupLarge
      }      
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

export const StateMachineUpdateAsyncAction = createAsyncGraphQLAction(StateMachineUpdateMutation)