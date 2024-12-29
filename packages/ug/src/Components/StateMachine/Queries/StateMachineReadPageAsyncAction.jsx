import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineReadPageQuery =
`
mutation StateMachineReadPageQuery($skip: Int, $limit: Int, $where: StateMachineWhereInputFilter) {
  result: statemachinePage(skip: $skip, limit: $limit, where: $where) {
    ...StateMachineLarge
  }
}

fragment StateMachineLarge on StateMachineGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const StateMachineReadPageAsyncAction = createAsyncGraphQLAction(StateMachineReadPageQuery)