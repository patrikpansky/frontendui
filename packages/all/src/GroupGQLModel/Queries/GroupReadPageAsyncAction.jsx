import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { GroupLargeFragment } from "./GroupFragments";

const GroupReadPageQueryStr = `
query GroupReadPageQuery($skip: Int, $limit: Int, $where: GroupWhereInputFilter) {
  result: groupPage(skip: $skip, limit: $limit, where: $where) {
    ...GroupLarge
  }
}
`
const GroupReadPageQuery = createQueryStrLazy(`
query GroupById($id: UUID!) {
  result: groupById(id: $id) {
    ...GroupLargeFragment
  }
}
`, GroupLargeFragment)
export const GroupReadPageAsyncAction = createAsyncGraphQLAction(GroupReadPageQuery)