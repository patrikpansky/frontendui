import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"

// Query to fetch exam dates
const ExamDatesQuery = `
query ExamDatesQuery($examId: ID!) {
    result: examById(id: $examId) {
        id
        name
        dates {
            date
            applicants {
                id
                name
            }
        }
    }
}
`

// Mutation to update exam dates
const UpdateExamDatesMutation = `
mutation UpdateExamDates($examId: ID!, $dates: [ExamDateInput!]!) {
    updateExamDates(examId: $examId, dates: $dates) {
        id
        dates {
            date
            applicants {
                id
            }
        }
    }
}
`

export const ExamDatesAsyncAction = createAsyncGraphQLAction(
    ExamDatesQuery,
    processVectorAttributeFromGraphQLResult("dates")
)

export const UpdateExamDatesAsyncAction = createAsyncGraphQLAction(
    UpdateExamDatesMutation,
    updateItemsFromGraphQLResult
)