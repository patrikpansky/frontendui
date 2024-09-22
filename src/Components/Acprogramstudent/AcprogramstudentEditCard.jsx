import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentCardCapsule } from './AcprogramstudentCardCapsule';

export const AcprogramstudentEditCardMutation = `
mutation AcprogramstudentEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramstudentUpdate(acprogramstudent: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramstudent {
            __typename
            id
            created
            lastchange
            semester
        }
    }
}`

const AcprogramstudentUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramstudentEditCardMutation)

export const AcprogramstudentEditCard = ({ acprogramstudent, children, label=""}) => {
    return (       
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudent } attributeName="id" label="Id" asyncUpdater={ AcprogramstudentUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudent } attributeName="created" label="Created" asyncUpdater={ AcprogramstudentUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudent } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramstudentUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramstudent } attributeName="semester" label="Semester" asyncUpdater={ AcprogramstudentUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramstudentCardCapsule>
    )
}
