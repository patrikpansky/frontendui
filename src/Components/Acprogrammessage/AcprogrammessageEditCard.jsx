import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogrammessageCardCapsule } from './AcprogrammessageCardCapsule';

export const AcprogrammessageEditCardMutation = `
mutation AcprogrammessageEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogrammessageUpdate(acprogrammessage: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogrammessage {
            __typename
            id
            created
            lastchange
            name
            description
            date
        }
    }
}`

const AcprogrammessageUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogrammessageEditCardMutation)

export const AcprogrammessageEditCard = ({ acprogrammessage, children, label=""}) => {
    return (       
        <AcprogrammessageCardCapsule acprogrammessage={ acprogrammessage } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="id" label="Id" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="created" label="Created" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="name" label="Name" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="description" label="Description" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogrammessage } attributeName="date" label="Date" asyncUpdater={ AcprogrammessageUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogrammessageCardCapsule>
    )
}
