import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { UserLargeFragment } from "./UserFragments";

const UserDeleteMutation = createQueryStrLazy(`
mutation UserDelete($id: UUID!, $lastchange: DateTime!) {
    result: userDelete(id: $id, lastchange: $lastchange) {
        ...UserGQLModelLargeFragment
    }
}
`, UserGQLModelLargeFragment)

export const UserDeleteAsyncAction = createAsyncGraphQLAction(UserDeleteMutation)