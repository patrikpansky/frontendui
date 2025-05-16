import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StudyPlanLessonLargeFragment } from "./StudyPlanLessonFragments";

const StudyPlanLessonUpdateMutationStr = `
mutation StudyPlanLessonUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: studyplanlessonUpdate(
    studyplanlesson: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on StudyPlanLessonGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...StudyPlanLessonLarge
      }      
    }
    ...StudyPlanLessonLarge
  }
}
`

const StudyPlanLessonUpdateMutation = createQueryStrLazy(`${StudyPlanLessonUpdateMutationStr}`, StudyPlanLessonLargeFragment)
export const StudyPlanLessonUpdateAsyncAction = createAsyncGraphQLAction(StudyPlanLessonUpdateMutation)