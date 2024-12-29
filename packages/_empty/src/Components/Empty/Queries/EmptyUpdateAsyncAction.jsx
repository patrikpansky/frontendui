import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

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

export const EmptyUpdateAsyncAction = createAsyncGraphQLAction(EmptyUpdateMutation)