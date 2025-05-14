import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionLargeFragment } from "./EvalutaionFragments";

const EvalutaionReadPageQuery = createQueryStrLazy(
`
query EvalutaionReadPageQuery($skip: Int, $limit: Int, $where: EvalutaionWhereInputFilter) {
  result: evalutaionPage(skip: $skip, limit: $limit, where: $where) {
    ...EvalutaionLarge
  }
}
`, 
    EvalutaionLargeFragment)

export const EvalutaionReadPageAsyncAction = createAsyncGraphQLAction(EvalutaionReadPageQuery)