import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StateMachineLargeFragment } from "./StateMachineFragments";

const StateMachineInsertMutation = createQueryStrLazy(
`
mutation StateMachineInsertMutation($id: UUID, $name: String!, $name_en: String) {
  result: statemachineInsert(
    statemachine: {id: $id, name: $name, nameEn: $name_en}
  ) {
    __typename
    ... on InsertError {
      failed
      msg
      input
    }
    ...StateMachineLarge
  }
}
`, StateMachineLargeFragment)

export const StateMachineInsertAsyncAction = createAsyncGraphQLAction(StateMachineInsertMutation)