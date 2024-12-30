import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragmentLazy } from "./EmptyFragments";

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
`

const EmptyInsertMutationLazy = createQueryStrLazy(EmptyInsertMutation, EmptyLargeFragmentLazy)
export const EmptyInsertAsyncAction = createAsyncGraphQLAction(EmptyInsertMutation)