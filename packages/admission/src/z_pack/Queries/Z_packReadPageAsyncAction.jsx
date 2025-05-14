import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { Z_packLargeFragment } from "./Z_packFragments";

const Z_packReadPageQuery = createQueryStrLazy(
`
query Z_packReadPageQuery($skip: Int, $limit: Int, $where: Z_packWhereInputFilter) {
  result: z_packPage(skip: $skip, limit: $limit, where: $where) {
    ...Z_packLarge
  }
}
`, 
    Z_packLargeFragment)

export const Z_packReadPageAsyncAction = createAsyncGraphQLAction(Z_packReadPageQuery)