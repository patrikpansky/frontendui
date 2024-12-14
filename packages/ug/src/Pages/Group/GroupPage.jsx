import { useParams } from 'react-router'
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, ComponentSentinel } from "@hrbolek/uoisfrontend-shared"
import { GroupLargeCard, GroupMediumCard, GroupRolesCard, GroupUsersInfinite } from '../../Components'

const GroupQueryRead = `
query GroupQueryRead($id: UUID!) {
    result: groupById(id: $id) {
        __typename
        id
        name
    }
}
`

const GroupPageContent = ({group}) => {
    return (
        <>
        {/* {group?.groups && <GroupSchemaLazy group={group?.groups[0]} />} */}
        <GroupLargeCard group={group} >
            {/* <GroupMediumCard group={group} /> */}
            <GroupRolesCard group={group} />
            <GroupUsersInfinite group={group} />
        </GroupLargeCard>
        </>
    )
}

const GroupReadAsyncAction = createAsyncGraphQLAction(GroupQueryRead)
const GroupPageContentLazy = createLazyComponent(GroupPageContent, "group", GroupReadAsyncAction)
export const GroupPage = () => {
    const { id } = useParams()
    const group = {id}
    return ( 
        <ComponentSentinel meCondition={me => me?.email?.includes("world")}>
            <GroupPageContentLazy group ={group} />
        </ComponentSentinel>
    )
}