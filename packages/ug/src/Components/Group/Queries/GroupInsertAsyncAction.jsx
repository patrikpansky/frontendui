import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const GroupInsertMutation =
`
mutation GroupInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: formGroupInsert(
    group: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...GroupLarge
  }
}

fragment GroupLarge on GroupGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const GroupInsertAsyncAction = createAsyncGraphQLAction(GroupInsertMutation)