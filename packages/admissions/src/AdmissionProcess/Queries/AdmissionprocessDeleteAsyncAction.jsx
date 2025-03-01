import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionprocessLargeFragment } from "./AdmissionprocessFragments";

const AdmissionprocessDeleteMutation = createQueryStrLazy(
`
mutation AdmissionprocessDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: admissionprocessDelete(
    admissionprocess: {id: $id, lastchange: $lastchange}
  ) {
    ... on AdmissionprocessGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...AdmissionprocessLarge
      }
    }
  }
}
`,
    AdmissionprocessLargeFragment)

export const AdmissionprocessDeleteAsyncAction = createAsyncGraphQLAction(AdmissionprocessDeleteMutation)