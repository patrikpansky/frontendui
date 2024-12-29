import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const EmptyInsertMutation =
`
mutation EmptyInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: emptyInsert(
    empty: {id: $id, name: $name, nameEn: $name_en}
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