import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionLargeFragment } from "./AdmissionFragments";

const AdmissionReadPageQueryStr = `
query AdmissionReadPageQuery($skip: Int, $limit: Int, $where: AdmissionWhereInputFilter) {
  result: admissionPage(skip: $skip, limit: $limit, where: $where) {
    ...AdmissionLarge
  }
}
`
const AdmissionReadPageQuery = createQueryStrLazy(`
query AdmissionById($id: UUID!) {
  result: admissionById(id: $id) {
    ...AdmissionLargeFragment
  }
}
`, AdmissionLargeFragment)
export const AdmissionReadPageAsyncAction = createAsyncGraphQLAction(AdmissionReadPageQuery)