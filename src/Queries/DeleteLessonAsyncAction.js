import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const query = `
mutation ($id: UUID!, $lastchange: DateTime!) {
  result: plannedLessonRemove(
    lesson: {id: $id, lastchange: $lastchange}
  ) {
    id
    msg
    result: plan {
      __typename
      id
      lastchange
      lessons {
        __typename
        id
        name
        lastchange
        order
        length
        type {
          id
          name
        }
        users {
          __typename
          id
          name
          surname
          email
          fullname
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
}
`


export const DeleteLessonAsyncAction = CreateAsyncActionFromMutation(query)