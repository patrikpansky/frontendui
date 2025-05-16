import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StateLargeFragment } from "./StateFragments";

const StateReadPageQueryStr = `
query StateReadPageQuery($skip: Int, $limit: Int, $where: StateWhereInputFilter) {
  result: statePage(skip: $skip, limit: $limit, where: $where) {
    ...StateLarge
  }
}
`
const StateReadPageQuery = createQueryStrLazy(`
query StateById($id: UUID!) {
  result: stateById(id: $id) {
    ...StateLargeFragment
  }
}
`, StateLargeFragment)
export const StateReadPageAsyncAction = createAsyncGraphQLAction(StateReadPageQuery)