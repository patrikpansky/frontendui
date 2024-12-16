import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useParams } from 'react-router'
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, ComponentSentinel, LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { GroupLargeCard, GroupMediumCard, GroupRolesCard, GroupSubgroups, GroupUsersInfinite } from '../../Components'
import { GroupPageNavbar } from './GroupPageNavbar'

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
            <GroupPageNavbar group={group} />
            <Row>
                <LeftColumn>
                    <GroupMediumCard group={group} />
                </LeftColumn>
                <MiddleColumn>
                    <GroupRolesCard group={group} />    
                </MiddleColumn>
            </Row>
            <Row id="events">
                <Col>
                    <GroupMediumCard group={group} />
                </Col>
            </Row>
            <Row id="subgroups">
                <Col>
                    <GroupSubgroups group={group} />
                </Col>
            </Row>
            <Row id="memberships">
                <Col>
                    <GroupMediumCard group={group} />
                </Col>
            </Row>
            <Row id="publications">
                <Col>
                    <GroupMediumCard group={group} />
                </Col>
            </Row>
            <Row id="projects">
                <Col>
                    <GroupMediumCard group={group} />
                </Col>
            </Row>
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