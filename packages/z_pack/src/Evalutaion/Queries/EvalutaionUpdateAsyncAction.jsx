import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { EvalutaionLargeFragment } from "./EvalutaionFragments";

const EvalutaionUpdateMutation = createQueryStrLazy(
`
mutation EvalutaionUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: evalutaionUpdate(
    evalutaion: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on EvalutaionGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...EvalutaionLarge
      }      
    }
    ...EvalutaionLarge
  }
}
`, EvalutaionLargeFragment)

export const EvalutaionUpdateAsyncAction = createAsyncGraphQLAction(EvalutaionUpdateMutation)