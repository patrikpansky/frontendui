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
  ...AdmissionLink
}
`, AdmissionLinkFragment)

export const AdmissionLargeFragment = createQueryStrLazy(
`
fragment AdmissionLarge on AdmissionGQLModel {
  ...AdmissionMedium
  paymentInfoId
  programId
  studentEntryDate
  paymentDate
  requestConditionExtendDate
  requestExtraConditionsDate
}
`, AdmissionMediumFragment)
  