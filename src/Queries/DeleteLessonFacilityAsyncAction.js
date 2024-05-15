import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const query = `
mutation ($facility_id: UUID!, $lesson_id: UUID!) {
    result: plannedLessonFacilityDelete(
      facilitylesson: {facilityId: $facility_id, planlessonId: $lesson_id}
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
  }
`


export const DeleteLessonFacilityAsyncAction = CreateAsyncActionFromMutation(query)