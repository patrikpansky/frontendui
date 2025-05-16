import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { TopicLargeFragment } from "./TopicFragments";

const TopicReadPageQueryStr = `
query TopicReadPageQuery($skip: Int, $limit: Int, $where: TopicWhereInputFilter) {
  result: topicPage(skip: $skip, limit: $limit, where: $where) {
    ...TopicLarge
  }
}
`
const TopicReadPageQuery = createQueryStrLazy(`
query TopicById($id: UUID!) {
  result: topicById(id: $id) {
    ...TopicLargeFragment
  }
}
`, TopicLargeFragment)
export const TopicReadPageAsyncAction = createAsyncGraphQLAction(TopicReadPageQuery)