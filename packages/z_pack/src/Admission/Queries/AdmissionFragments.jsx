import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const AdmissionLinkFragment = createQueryStrLazy(
`
fragment AdmissionLink on AdmissionGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const AdmissionMediumFragment = createQueryStrLazy(
`
fragment AdmissionMedium on AdmissionGQLModel {
  examLastDate
  examStartDate
  programId
  studentEntryDate
  paymentDate
  requestConditionExtendDate
  requestExtraConditionsDate
  ...AdmissionLink
}
`, AdmissionLinkFragment)

export const AdmissionLargeFragment = createQueryStrLazy(
`
fragment AdmissionLarge on AdmissionGQLModel {
  ...AdmissionMedium
}
`, AdmissionMediumFragment)
  