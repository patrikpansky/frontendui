import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentstateCardCapsule } from './AcprogramstudentstateCardCapsule';

export const AcprogramstudentstateEditCardMutation = `
mutation AcprogramstudentstateEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramstudentstateUpdate(acprogramstudentstate: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramstudentstate {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramstudentstateUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramstudentstateEditCardMutation)

export const AcprogramstudentstateEditCard = ({ acprogramstudentstate, children, label=""}) => {
    return (       
        <AcprogramstudentstateCardCapsule acprogramstudentstate={ acprogramstudentstate } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudentstate } attributeName="id" label="Id" asyncUpdater={ AcprogramstudentstateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudentstate } attributeName="name" label="Name" asyncUpdater={ AcprogramstudentstateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudentstate } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramstudentstateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudentstate } attributeName="created" label="Created" asyncUpdater={ AcprogramstudentstateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudentstate } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramstudentstateUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramstudentstateCardCapsule>
    )
}
