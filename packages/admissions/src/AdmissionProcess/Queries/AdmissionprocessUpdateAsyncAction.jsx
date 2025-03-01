import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionprocessLargeFragment } from "./AdmissionprocessFragments";

const AdmissionprocessUpdateMutation = createQueryStrLazy(
`
mutation AdmissionprocessUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: admissionprocessUpdate(
    admissionprocess: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on AdmissionprocessGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...AdmissionprocessLarge
      }      
    }
    ...AdmissionprocessLarge
  }
}
`, AdmissionprocessLargeFragment)

export const AdmissionprocessUpdateAsyncAction = createAsyncGraphQLAction(AdmissionprocessUpdateMutation)