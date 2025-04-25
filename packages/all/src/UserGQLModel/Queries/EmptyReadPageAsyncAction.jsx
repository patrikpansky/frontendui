import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { UserLargeFragment } from "./UserFragments";

const UserReadPageQuery = createQueryStrLazy(`
query UserById($id: UUID!) {
    result: userById(id: $id) {
        ...UserGQLModelLargeFragment
    }
}
`, UserGQLModelLargeFragment)

export const UserReadPageAsyncAction = createAsyncGraphQLAction(UserReadPageQuery)