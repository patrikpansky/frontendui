import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { TemplateLargeFragment } from "./TemplateFragments";

const TemplateUpdateMutation = createQueryStrLazy(
`
mutation TemplateUpdateMutation($id: UUID!, $lastchange: DateTime!, $name: String, $name_en: String) {
  result: templateUpdate(
    template: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}
  ) {
    ... on TemplateGQLModelUpdateError {
      failed
      msg
      input
      Entity {
        ...TemplateLarge
      }      
    }
    ...TemplateLarge
  }
}
`, TemplateLargeFragment)

export const TemplateUpdateAsyncAction = createAsyncGraphQLAction(TemplateUpdateMutation)