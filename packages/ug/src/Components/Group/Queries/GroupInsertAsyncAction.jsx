import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const GroupInsertMutation =
`
mutation GroupInsertMutation($id: UUID, $name: String, $name_en: String, $order: Int, $section_id: UUID) {
  result: formGroupInsert(
    group: {id: $id, name: $name, nameEn: $name_en, order: $order, sectionId: $section_id}
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