import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { LessonTypeLargeFragment } from "./LessonTypeFragments";

const LessonTypeReadPageQueryStr = `
query LessonTypeReadPageQuery($skip: Int, $limit: Int, $where: LessonTypeWhereInputFilter) {
  result: lessontypePage(skip: $skip, limit: $limit, where: $where) {
    ...LessonTypeLarge
  }
}
`
const LessonTypeReadPageQuery = createQueryStrLazy(`${LessonTypeReadPageQueryStr}`, LessonTypeLargeFragment)
export const LessonTypeReadPageAsyncAction = createAsyncGraphQLAction(LessonTypeReadPageQuery)