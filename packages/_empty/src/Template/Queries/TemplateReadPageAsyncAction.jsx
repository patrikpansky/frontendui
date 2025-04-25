import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { TemplateLargeFragment } from "./TemplateFragments";

const TemplateReadPageQuery = createQueryStrLazy(
`
query TemplateReadPageQuery($skip: Int, $limit: Int, $where: TemplateWhereInputFilter) {
  result: templatePage(skip: $skip, limit: $limit, where: $where) {
    ...TemplateLarge
  }
}
`, 
    TemplateLargeFragment)

export const TemplateReadPageAsyncAction = createAsyncGraphQLAction(TemplateReadPageQuery)