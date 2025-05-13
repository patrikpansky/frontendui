import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { ProgramLargeFragment } from "./ProgramFragments";

const ProgramReadPageQueryStr = `
query ProgramReadPageQuery($skip: Int, $limit: Int, $where: ProgramWhereInputFilter) {
  result: programPage(skip: $skip, limit: $limit, where: $where) {
    ...ProgramLarge
  }
}
`
const ProgramReadPageQuery = createQueryStrLazy(`
query ProgramById($id: UUID!) {
  result: programById(id: $id) {
    ...ProgramLargeFragment
  }
}
`, ProgramLargeFragment)
export const ProgramReadPageAsyncAction = createAsyncGraphQLAction(ProgramReadPageQuery)