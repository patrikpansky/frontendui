import { useParams } from 'react-router'
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, ComponentSentinel } from "@hrbolek/uoisfrontend-shared"
import { UserLargeCard } from "../../Components/User/UserLargeCard"
import { GroupSchemaLazy } from '../../Components/Group/GroupSchema'
import { UserMediumCard } from '../../Components'
import { UserEventsCard } from '../../Components/User/Vectors/UserEventsCard'


const UserQueryRead = `
query UserQueryRead($id: UUID!) {
    result: userById(id: $id) {
        __typename
        id
        name
        surname
        fullname
        email
        # university: memberOf(grouptypeId: "cd49e152-610c-11ed-9f29-001a7dda7110") {
        #     __typename
        #     id
        #     name
        #     }        
        groups(
        where: {_and: [ 
            {group: {grouptype: {category_id: {_eq: "be2b2dcc-4bfe-4035-99e8-dd6d6f01562e"}}}},
            {group: {valid: {_eq: true}}},
            {valid: {_eq: true}},
        ]
        }
        ) {
            __typename
            id
            name
            type {
                id
                name
                category {
                    id
                    name
                }
            }
        }
    }
}
`

const UserPageContent = ({user}) => {
    return (
        <>
        {/* {user?.groups && <GroupSchemaLazy group={user?.groups[0]} />} */}
        <UserLargeCard user={user} >
            {/* <UserMediumCard user={user} />
            <UserEventsCard user={user} /> */}

        </UserLargeCard>
        </>
    )
}

const UserReadAsyncAction = createAsyncGraphQLAction(UserQueryRead)
const UserPageContentLazy = createLazyComponent(UserPageContent, "user", UserReadAsyncAction)
export const UserPage = () => {
    const { id } = useParams()
    const user = {id}
    return ( 
        <ComponentSentinel meCondition={me => me?.email?.includes("world")}>
            <UserPageContentLazy user ={user} />
        </ComponentSentinel>
    )
}