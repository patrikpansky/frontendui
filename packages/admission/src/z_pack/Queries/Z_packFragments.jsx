import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const Z_packLinkFragment = createQueryStrLazy(
`
fragment Z_packLink on Z_packGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const Z_packMediumFragment = createQueryStrLazy(
`
fragment Z_packMedium on Z_packGQLModel {
  ...Z_packLink
}
`, Z_packLinkFragment)

export const Z_packLargeFragment = createQueryStrLazy(
`
fragment Z_packLarge on Z_packGQLModel {
  ...Z_packMedium
}
`, Z_packMediumFragment)
  