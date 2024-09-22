import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtypeCardCapsule } from './AcprogramtypeCardCapsule';

export const AcprogramtypeEditCardMutation = `
mutation AcprogramtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramtypeUpdate(acprogramtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramtype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramtypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramtypeEditCardMutation)

export const AcprogramtypeEditCard = ({ acprogramtype, children, label=""}) => {
    return (       
        <AcprogramtypeCardCapsule acprogramtype={ acprogramtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtype } attributeName="id" label="Id" asyncUpdater={ AcprogramtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtype } attributeName="name" label="Name" asyncUpdater={ AcprogramtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtype } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtype } attributeName="created" label="Created" asyncUpdater={ AcprogramtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramtypeCardCapsule>
    )
}
