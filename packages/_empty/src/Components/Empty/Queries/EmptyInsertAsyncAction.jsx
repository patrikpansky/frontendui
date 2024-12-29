import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const EmptyInsertMutation =
`
mutation EmptyInsertMutation($id: UUID, $name: String, $name_en: String, $order: Int, $section_id: UUID) {
  result: emptyInsert(
    empty: {id: $id, name: $name, nameEn: $name_en, order: $order, sectionId: $section_id}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...EmptyLarge
  }
}

fragment EmptyLarge on EmptyGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const EmptyInsertAsyncAction = createAsyncGraphQLAction(EmptyInsertMutation)