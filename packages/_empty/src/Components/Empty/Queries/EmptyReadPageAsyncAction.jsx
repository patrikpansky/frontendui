import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragmentLazy } from "./EmptyFragments";

const EmptyReadPageQuery =
`
query EmptyReadPageQuery($skip: Int, $limit: Int, $where: EmptyWhereInputFilter) {
  result: emptyPage(skip: $skip, limit: $limit, where: $where) {
    ...EmptyLarge
  }
}
`

const EmptyReadPageQueryLazy = createQueryStrLazy(EmptyReadPageQuery, EmptyLargeFragmentLazy)
export const EmptyReadPageAsyncAction = createAsyncGraphQLAction(EmptyReadPageQueryLazy)