import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionLargeFragment } from "./EvalutaionFragments";

const EvalutaionInsertMutation = createQueryStrLazy(
`
mutation EvalutaionInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: evalutaionInsert(
    evalutaion: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...EvalutaionLarge
  }
}
`,
    EvalutaionLargeFragment)


export const EvalutaionInsertAsyncAction = createAsyncGraphQLAction(EvalutaionInsertMutation)