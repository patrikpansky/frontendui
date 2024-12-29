import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

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

fragment EmptyLarge on EmptyGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const EmptyDeleteAsyncAction = createAsyncGraphQLAction(EmptyDeleteMutation)