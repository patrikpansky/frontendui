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
  groupId
  group {
    ...GroupLink
  }
  templateFormId
  templateForm {
    ...FormLarge
  }
}

fragment GroupLink on GroupGQLModel {
  __typename
  id
  name
}

fragment FormLarge on FormGQLModel {
  __typename
  id
  name
  state {
    __typename
    id
    name
    readerslistId
  }
  sections {
    __typename
    id
    lastchange
    name
    order
    parts {
      __typename
      id
      lastchange
      name
      order
      items {
        __typename
        lastchange
        id
        name
        value
        order
        type {
          id
          name
        }
      }
    }
  }
}
`

export const RequestTypeUpdateAsyncAction = createAsyncGraphQLAction(RequestTypeUpdateMutation)