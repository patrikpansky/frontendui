import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"

export const TemplateLinkFragment = createQueryStrLazy(
`
fragment TemplateLink on TemplateGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`)


export const TemplateMediumFragment = createQueryStrLazy(
`
fragment TemplateMedium on TemplateGQLModel {
  ...TemplateLink
}
`, TemplateLinkFragment)

export const TemplateLargeFragment = createQueryStrLazy(
`
fragment TemplateLarge on TemplateGQLModel {
  ...TemplateMedium
}
`, TemplateMediumFragment)
  