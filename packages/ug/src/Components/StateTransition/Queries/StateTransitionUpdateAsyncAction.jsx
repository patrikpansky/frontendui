import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionUpdateMutation =
`
mutation StateTransitionUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: statetransitionUpdate(
    statetransition: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on StateTransitionGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...GroupLarge
      }      
    }
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

export const StateTransitionUpdateAsyncAction = createAsyncGraphQLAction(StateTransitionUpdateMutation)