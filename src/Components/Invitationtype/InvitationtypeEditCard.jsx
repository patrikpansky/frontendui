import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { InvitationtypeCardCapsule } from './InvitationtypeCardCapsule';

export const InvitationtypeEditCardMutation = `
mutation InvitationtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: invitationtypeUpdate(invitationtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: invitationtype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const InvitationtypeUpdateAsyncAction = CreateAsyncActionFromMutation(InvitationtypeEditCardMutation)

export const InvitationtypeEditCard = ({ invitationtype, children, label=""}) => {
    return (       
        <InvitationtypeCardCapsule invitationtype={ invitationtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ invitationtype } attributeName="id" label="Id" asyncUpdater={ InvitationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ invitationtype } attributeName="name" label="Name" asyncUpdater={ InvitationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ invitationtype } attributeName="nameen" label="Nameen" asyncUpdater={ InvitationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ invitationtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ InvitationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ invitationtype } attributeName="created" label="Created" asyncUpdater={ InvitationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </InvitationtypeCardCapsule>
    )
}
