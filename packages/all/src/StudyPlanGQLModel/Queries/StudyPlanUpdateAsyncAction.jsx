import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StudyPlanLargeFragment } from "./StudyPlanFragments";

const StudyPlanUpdateMutationStr = `
mutation StudyPlanUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: studyplanUpdate(
    studyplan: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on StudyPlanGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...StudyPlanLarge
      }      
    }
    ...StudyPlanLarge
  }
}
`

const StudyPlanUpdateMutation = createQueryStrLazy(`${StudyPlanUpdateMutationStr}`, StudyPlanLargeFragment)
export const StudyPlanUpdateAsyncAction = createAsyncGraphQLAction(StudyPlanUpdateMutation)