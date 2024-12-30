import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragmentLazy } from "./EmptyFragments";

const EmptyReadQuery =
`
query EmptyReadQuery($id: UUID!) {
  result: emptyById(id: $id) {
    ...EmptyLarge
  }
}
`
const EmptyReadQueryLazy = createQueryStrLazy(EmptyReadQuery, EmptyLargeFragmentLazy)

export const EmptyReadAsyncAction = createAsyncGraphQLAction(EmptyReadQueryLazy)