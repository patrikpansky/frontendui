import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { EmptyLargeFragmentLazy } from "./EmptyFragments";

const EmptyUpdateMutation =
`
mutation EmptyUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: emptyUpdate(
    empty: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on EmptyGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...EmptyLarge
      }      
    }
    ...EmptyLarge
  }
}

fragment EmptyLarge on EmptyGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`
const EmptyUpdateMutationLazy = createQueryStrLazy(EmptyUpdateMutation, EmptyLargeFragmentLazy)
export const EmptyUpdateAsyncAction = createAsyncGraphQLAction(EmptyUpdateMutationLazy)