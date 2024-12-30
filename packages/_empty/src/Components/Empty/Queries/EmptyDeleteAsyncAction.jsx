import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragmentLazy } from "./EmptyFragments";

const EmptyDeleteMutation =
`
mutation EmptyDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: emptyDelete(
    empty: {id: $id, lastchange: $lastchange}
  ) {
    ... on EmptyGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...EmptyLarge
      }
    }
  }
}
`

const EmptyDeleteMutationLazy = createQueryStrLazy(EmptyDeleteMutation, EmptyLargeFragmentLazy)
export const EmptyDeleteAsyncAction = createAsyncGraphQLAction(EmptyDeleteMutationLazy)