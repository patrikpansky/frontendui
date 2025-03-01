import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionprocessLargeFragment } from "./AdmissionprocessFragments";

const AdmissionprocessReadPageQuery = createQueryStrLazy(
`
query AdmissionprocessReadPageQuery($skip: Int, $limit: Int, $where: AdmissionprocessWhereInputFilter) {
  result: admissionprocessPage(skip: $skip, limit: $limit, where: $where) {
    ...AdmissionprocessLarge
  }
}
`, 
    AdmissionprocessLargeFragment)

export const AdmissionprocessReadPageAsyncAction = createAsyncGraphQLAction(AdmissionprocessReadPageQuery)