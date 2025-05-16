import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StudyPlanLargeFragment } from "./StudyPlanFragments";


const StudyPlanInsertMutationStr = `
mutation StudyPlanInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: studyplanInsert(
    studyplan: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...StudyPlanLarge
  }
}
`

const StudyPlanInsertMutation = createQueryStrLazy(`${StudyPlanInsertMutationStr}`, StudyPlanLargeFragment)
export const StudyPlanInsertAsyncAction = createAsyncGraphQLAction(StudyPlanInsertMutation)