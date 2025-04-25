import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { UserLargeFragment } from "./UserFragments";

const UserInsertMutation = createQueryStrLazy(`
mutation UserInsert($id: UUID, $name: String, $surname: String, $email: String, $valid: Boolean) {
    result: userInsert(id: $id, name: $name, surname: $surname, email: $email, valid: $valid) {
        ...UserGQLModelLargeFragment
    }
}
`, UserGQLModelLargeFragment)


export const UserInsertAsyncAction = createAsyncGraphQLAction(UserInsertMutation)