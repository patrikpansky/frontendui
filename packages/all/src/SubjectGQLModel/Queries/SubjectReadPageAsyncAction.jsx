import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { SubjectLargeFragment } from "./SubjectFragments";

const SubjectReadPageQueryStr = `
query SubjectReadPageQuery($skip: Int, $limit: Int, $where: SubjectWhereInputFilter) {
  result: subjectPage(skip: $skip, limit: $limit, where: $where) {
    ...SubjectLarge
  }
}
`
const SubjectReadPageQuery = createQueryStrLazy(`
query SubjectById($id: UUID!) {
  result: subjectById(id: $id) {
    ...SubjectLargeFragment
  }
}
`, SubjectLargeFragment)
export const SubjectReadPageAsyncAction = createAsyncGraphQLAction(SubjectReadPageQuery)