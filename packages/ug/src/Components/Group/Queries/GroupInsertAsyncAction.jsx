import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const GroupInsertMutation =
`
mutation GroupInsertMutation($id: UUID, $name: String!, $name_en: String, $grouptype_id: UUID!) {
  result: groupInsert(
    group: {id: $id, name: $name, nameEn: $name_en, grouptypeId: $grouptype_id}
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