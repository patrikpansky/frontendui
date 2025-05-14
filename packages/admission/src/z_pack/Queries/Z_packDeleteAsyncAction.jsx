import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packLargeFragment } from "./Z_packFragments";

const Z_packDeleteMutation = createQueryStrLazy(
`
mutation Z_packDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: z_packDelete(
    z_pack: {id: $id, lastchange: $lastchange}
  ) {
    ... on Z_packGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...Z_packLarge
      }
    }
  }
}
`,
    Z_packLargeFragment)

export const Z_packDeleteAsyncAction = createAsyncGraphQLAction(Z_packDeleteMutation)