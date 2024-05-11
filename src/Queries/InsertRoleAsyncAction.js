import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const query = `mutation($id: UUID, $user_id: UUID!, $group_id: UUID!, $roletype_id: UUID!, $startdate: DateTime, $enddate: DateTime) {
  result: roleInsert(role: {startdate: $startdate, enddate: $enddate, id: $id, userId: $user_id, groupId: $group_id, roletypeId: $roletype_id}) {
    id
    msg
    result: role {
      __typename
      lastchange
      id
      user { id fullname }
      group { id name }
    }
  }
}`


export const InsertRoleAsyncAction = CreateAsyncActionFromMutation(query)