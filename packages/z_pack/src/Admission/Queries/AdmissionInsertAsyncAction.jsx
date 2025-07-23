import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionLargeFragment } from "./AdmissionFragments";

const AdmissionInsertMutation = createQueryStrLazy(
`
mutation AdmissionInsertMutation($programId: UUID!, $name: String!, $examStartDate: DateTime!, $id: UUID, $name_en: String, $examLastDate: DateTime, $studentEntryDate: DateTime, $paymentDate: DateTime, $requestConditionExtendDate: DateTime, $requestExtraConditionsDate: DateTime) {
  result: admissionInsert(
    admission: {programId: $programId, name: $name, examStartDate: $examStartDate, id: $id, nameEn: $name_en, examLastDate: $examLastDate, studentEntryDate: $studentEntryDate, paymentDate: $paymentDate, requestConditionExtendDate: $requestConditionExtendDate, requestExtraConditionsDate: $requestExtraConditionsDate}
  ) {
    __typename
    ... on InsertError {
      failed
      msg
      input
    }
    ...AdmissionLarge
  }
}
`,
    AdmissionLargeFragment)


export const AdmissionInsertAsyncAction = createAsyncGraphQLAction(AdmissionInsertMutation)