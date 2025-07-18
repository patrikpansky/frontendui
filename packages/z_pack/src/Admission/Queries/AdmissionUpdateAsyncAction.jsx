import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { AdmissionLargeFragment } from "./AdmissionFragments";

const AdmissionUpdateMutation = createQueryStrLazy(
`
mutation AdmissionUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String, $examLastDate: DateTime, $examStartDate: DateTime, $studentEntryDate: DateTime, $paymentDate: DateTime, $requestConditionExtendDate: DateTime, $requestExtraConditionsDate: DateTime, $paymentInfoId: UUID, $programId: UUID) {
  result: admissionUpdate(
    admission: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en, examLastDate: $examLastDate, examStartDate: $examStartDate, studentEntryDate: $studentEntryDate, paymentDate: $paymentDate, requestConditionExtendDate: $requestConditionExtendDate, requestExtraConditionsDate: $requestExtraConditionsDate, paymentInfoId: $paymentInfoId, programId: $programId}
  ) {
    ... on AdmissionGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...AdmissionLarge
      }      
    }
    ...AdmissionLarge
  }
}
`, AdmissionLargeFragment)

export const AdmissionUpdateAsyncAction = createAsyncGraphQLAction(AdmissionUpdateMutation)