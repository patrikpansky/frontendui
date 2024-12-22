import { createAsyncGraphQLAction, useFreshItem } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, LazyRender } from "@hrbolek/uoisfrontend-shared"
import { UserLink, UserMediumCard, UserMediumContent } from "@hrbolek/uoisfrontend-ug"

const StudentQuery = 
`
query StudentQuery($id: UUID!) {
    result: userById(id: $id) {
        __typename
        id
        name
        surname
        fullname
        email
    }
}
`

const StudentContent = ({user}) => {
    return (
        <>
        <UserLink user={user} />
        <UserMediumContent user={user}>
            
        </UserMediumContent>
        </>
    )
}

const StudentReadAsyncAction = createAsyncGraphQLAction(StudentQuery)
// const StudentWithRead = createLazyComponent(UserMediumCard, "user", StudentReadAsyncAction)
const StudentWithRead = createLazyComponent(StudentContent, "user", StudentReadAsyncAction)

export const Student = ({value}) => {
    return (
        <LazyRender>
            <StudentWithRead user={{id: value}} />
        </LazyRender>
    )
}