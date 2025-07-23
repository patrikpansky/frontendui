import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { StudentLargeFragment } from "./StudentFragments";

const StudentInsertForAdmissionMutation = createQueryStrLazy(
`
mutation StudentInsertForAdmissionMutation($id: UUID, $name: String!) {
  result: studentInsert(
    student: {id: $id, name: $name}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...StudentLarge
  }
}
`,
    StudentLargeFragment)

export const StudentInsertForAdmissionAsyncAction = createAsyncGraphQLAction(StudentInsertForAdmissionMutation) 