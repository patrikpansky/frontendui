import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionLargeFragment } from "./EvalutaionFragments";

const EvalutaionDeleteMutation = createQueryStrLazy(
`
mutation EvalutaionDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: evalutaionDelete(
    evalutaion: {id: $id, lastchange: $lastchange}
  ) {
    ... on EvalutaionGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...EvalutaionLarge
      }
    }
  }
}
`,
    EvalutaionLargeFragment)

export const EvalutaionDeleteAsyncAction = createAsyncGraphQLAction(EvalutaionDeleteMutation)