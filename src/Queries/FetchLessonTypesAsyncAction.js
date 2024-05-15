import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `
query ($limit: Int, $skip: Int, $where: LessonTypeInputFilter) {
  result: acLessonTypePage(skip: $skip, limit: $limit, where: $where) {
    __typename
    id
    name
  }
}
`


export const FetchLessonTypesAsyncAction = CreateAsyncActionFromQuery(query)