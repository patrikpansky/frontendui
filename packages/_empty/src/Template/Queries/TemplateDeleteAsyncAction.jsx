import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { TemplateLargeFragment } from "./TemplateFragments";

const TemplateDeleteMutation = createQueryStrLazy(
`
mutation TemplateDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: templateDelete(
    template: {id: $id, lastchange: $lastchange}
  ) {
    ... on TemplateGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...TemplateLarge
      }
    }
  }
}
`,
    TemplateLargeFragment)

export const TemplateDeleteAsyncAction = createAsyncGraphQLAction(TemplateDeleteMutation)