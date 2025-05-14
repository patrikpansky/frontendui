import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packLargeFragment } from "./Z_packFragments";

const Z_packInsertMutation = createQueryStrLazy(
`
mutation Z_packInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: z_packInsert(
    z_pack: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...Z_packLarge
  }
}
`,
    Z_packLargeFragment)


export const Z_packInsertAsyncAction = createAsyncGraphQLAction(Z_packInsertMutation)