import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent } from "@hrbolek/uoisfrontend-shared"
import { UserLargeCard } from "../../Components/User/UserLargeCard"


const UserRead = `
query UserRead($id: UUID!) {
    result: userById(is: $id) {
        __typename
        id
        name
        fullname
        email
    }
}
`

const UserPageContent = ({user}) => {
    return (
        <UserLargeCard user={user} />
    )
}

const UserReadAsyncAction = createAsyncGraphQLAction(UserRead)
const UserPageContentLazy = createLazyComponent(UserPageContent, "user", UserReadAsyncAction)
export const UserPage = () => {
    const { id } = useParams()
    const user = {id}
    return ( 
        <UserPageContentLazy user ={user} />
    )
}