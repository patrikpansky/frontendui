import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const AdmissionprocessLinkFragment = createQueryStrLazy(
`
fragment AdmissionprocessLink on AdmissionprocessGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const AdmissionprocessMediumFragment = createQueryStrLazy(
`
fragment AdmissionprocessMedium on AdmissionprocessGQLModel {
  ...AdmissionprocessLink
}
`, AdmissionprocessLinkFragment)

export const AdmissionprocessLargeFragment = createQueryStrLazy(
`
fragment AdmissionprocessLarge on AdmissionprocessGQLModel {
  ...AdmissionprocessMedium
}
`, AdmissionprocessMediumFragment)
  