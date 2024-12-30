import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

const EmptyLargeFragment = 
`
fragment EmptyLarge on EmptyGQLModel {
  ...EmptyMedium
}
`

const EmptyMediumFragment = 
`
fragment EmptyMedium on EmptyGQLModel {
  ...EmptyLink
}
`

const EmptyLinkFragment = 
`
fragment EmptyLink on EmptyGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const EmptyLinkFragmentLazy = createQueryStrLazy(EmptyLinkFragment)
export const EmptyMediumFragmentLazy = createQueryStrLazy(EmptyMediumFragment, EmptyLinkFragmentLazy)
export const EmptyLargeFragmentLazy = createQueryStrLazy(EmptyLargeFragment, EmptyMediumFragmentLazy)