import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateUpdateMutation =
`
mutation StateUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: stateUpdate(
    state: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on StateGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...GroupLarge
      }      
    }
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

export const StateUpdateAsyncAction = createAsyncGraphQLAction(StateUpdateMutation)