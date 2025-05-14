import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packLargeFragment } from "./Z_packFragments";

const Z_packUpdateMutation = createQueryStrLazy(
`
mutation Z_packUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: z_packUpdate(
    z_pack: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on Z_packGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...Z_packLarge
      }      
    }
    ...Z_packLarge
  }
}
`, Z_packLargeFragment)

export const Z_packUpdateAsyncAction = createAsyncGraphQLAction(Z_packUpdateMutation)