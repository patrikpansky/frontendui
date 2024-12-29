import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"

const RequestTypeUpdateMutation = `
mutation RequestTypeUpdate($id: UUID!, $lastchange: DateTime!, $name: String!, $name_en: String!) {
  result: requestTypeUpdate(type: {id: $id, lastchange: $lastchange, name: $name, nameEn: $name_en}) {
    ...on RequestTypeGQLModelUpdateError {
      input
      failed
      msg
      input
    }
    ...RequestType
  }
}

fragment RequestType on RequestTypeGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
}
`

export const RequestTypeUpdateAsyncAction = createAsyncGraphQLAction(RequestTypeUpdateMutation)