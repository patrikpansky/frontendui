import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateInsertMutation =
`
mutation StateInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: stateInsert(
    state: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
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

export const StateInsertAsyncAction = createAsyncGraphQLAction(StateInsertMutation)