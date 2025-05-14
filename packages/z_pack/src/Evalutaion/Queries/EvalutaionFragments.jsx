import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const EvalutaionLinkFragment = createQueryStrLazy(
`
fragment EvalutaionLink on EvalutaionGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const EvalutaionMediumFragment = createQueryStrLazy(
`
fragment EvalutaionMedium on EvalutaionGQLModel {
  ...EvalutaionLink
}
`, EvalutaionLinkFragment)

export const EvalutaionLargeFragment = createQueryStrLazy(
`
fragment EvalutaionLarge on EvalutaionGQLModel {
  ...EvalutaionMedium
}
`, EvalutaionMediumFragment)
  