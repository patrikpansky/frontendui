import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionprocessLargeFragment } from "./AdmissionprocessFragments";

const AdmissionprocessInsertMutation = createQueryStrLazy(
`
mutation AdmissionprocessInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: admissionprocessInsert(
    admissionprocess: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...AdmissionprocessLarge
  }
}
`,
    AdmissionprocessLargeFragment)


export const AdmissionprocessInsertAsyncAction = createAsyncGraphQLAction(AdmissionprocessInsertMutation)