import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `
query($id: UUID!) {
  result: planById(id: $id) {
    __typename
    id
    lastchange
    semester {
        __typename
        id
        order
        subject {
          id
          name
        }
    }
    lessons {
      __typename
      id
      name
      lastchange
      length
      order
      type {
        id
        name
      }
      users {
        __typename
        id
        name
        surname
        fullname        
        email
      }
      groups {
        __typename
        id
        name
      }
      facilities {
        __typename
        id
        name
        label
      }
    }
  }
}
`


export const FetchPlanByIdAsyncAction = CreateAsyncActionFromQuery(query)