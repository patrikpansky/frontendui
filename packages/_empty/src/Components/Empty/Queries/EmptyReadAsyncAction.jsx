import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragment, EmptyLargeFragmentLazy } from "./EmptyFragments";

const EmptyReadQuery = createQueryStrLazy(
`
query EmptyReadQuery($id: UUID!) {
  result: emptyById(id: $id) {
    ...EmptyLarge
  }
}
`, 
    EmptyLargeFragment)

export const EmptyReadAsyncAction = createAsyncGraphQLAction(EmptyReadQuery)