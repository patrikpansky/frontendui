import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { UserLargeFragment } from "./UserFragments";

const UserUpdateMutation = createQueryStrLazy(`
mutation UserUpdate($id: UUID!, $lastchange: DateTime!, $name: String, $surname: String, $email: String, $valid: Boolean) {
    result: userUpdate(id: $id, lastchange: $lastchange, name: $name, surname: $surname, email: $email, valid: $valid) {
        ...UserGQLModelLargeFragment
    }
}
`, UserLargeFragment)

export const UserUpdateAsyncAction = createAsyncGraphQLAction(UserUpdateMutation)