import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionInsertMutation =
`
mutation StateTransitionInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: statetransitionInsert(
    statetransition: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
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

export const StateTransitionInsertAsyncAction = createAsyncGraphQLAction(StateTransitionInsertMutation)