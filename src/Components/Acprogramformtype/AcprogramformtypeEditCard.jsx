import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramformtypeCardCapsule } from './AcprogramformtypeCardCapsule';

export const AcprogramformtypeEditCardMutation = `
mutation AcprogramformtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramformtypeUpdate(acprogramformtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramformtype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramformtypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramformtypeEditCardMutation)

export const AcprogramformtypeEditCard = ({ acprogramformtype, children, label=""}) => {
    return (       
        <AcprogramformtypeCardCapsule acprogramformtype={ acprogramformtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramformtype } attributeName="id" label="Id" asyncUpdater={ AcprogramformtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramformtype } attributeName="name" label="Name" asyncUpdater={ AcprogramformtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramformtype } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramformtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramformtype } attributeName="created" label="Created" asyncUpdater={ AcprogramformtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramformtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramformtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramformtypeCardCapsule>
    )
}
