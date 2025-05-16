import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { LessonLargeFragment } from "./LessonFragments";

const LessonReadPageQueryStr = `
query LessonReadPageQuery($skip: Int, $limit: Int, $where: LessonWhereInputFilter) {
  result: lessonPage(skip: $skip, limit: $limit, where: $where) {
    ...LessonLarge
  }
}
`
const LessonReadPageQuery = createQueryStrLazy(`
query LessonById($id: UUID!) {
  result: lessonById(id: $id) {
    ...LessonLargeFragment
  }
}
`, LessonLargeFragment)
export const LessonReadPageAsyncAction = createAsyncGraphQLAction(LessonReadPageQuery)