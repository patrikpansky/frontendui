import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const query = `
mutation($plan_id: ID!, $lessontype_id: ID! $name: String! $order: Int $length: Int) {
  result: plannedLessonInsert(lesson: {
      planId: $plan_id
      name: $name
      lessontypeId: $lessontype_id
      order: $order
      length: $length
    }) {
      id
      msg
   
        result: plan { __typename
            id lastchange
            lessons {
                __typename 
                id
                name
                lastchange
                order
                length
                type { id name }
                users { __typename id
                    name surname email fullname
                }
                groups { __typename id name }
                facilities { __typename id name label }
            }
        }

  }
}`


export const InsertLessonAsyncAction = CreateAsyncActionFromMutation(query)