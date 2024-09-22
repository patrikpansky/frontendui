import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MembershipCardCapsule } from './MembershipCardCapsule';

export const MembershipEditCardMutation = `
mutation MembershipEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: membershipUpdate(membership: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: membership {
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }
}`

const MembershipUpdateAsyncAction = CreateAsyncActionFromMutation(MembershipEditCardMutation)

export const MembershipEditCard = ({ membership, children, label=""}) => {
    return (       
        <MembershipCardCapsule membership={ membership } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="id" label="Id" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="created" label="Created" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="lastchange" label="Lastchange" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="valid" label="Valid" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="startdate" label="Startdate" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ membership } attributeName="enddate" label="Enddate" asyncUpdater={ MembershipUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </MembershipCardCapsule>
    )
}
