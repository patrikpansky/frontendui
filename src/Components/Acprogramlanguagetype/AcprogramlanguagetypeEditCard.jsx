import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramlanguagetypeCardCapsule } from './AcprogramlanguagetypeCardCapsule';

export const AcprogramlanguagetypeEditCardMutation = `
mutation AcprogramlanguagetypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramlanguagetypeUpdate(acprogramlanguagetype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramlanguagetype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramlanguagetypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramlanguagetypeEditCardMutation)

export const AcprogramlanguagetypeEditCard = ({ acprogramlanguagetype, children, label=""}) => {
    return (       
        <AcprogramlanguagetypeCardCapsule acprogramlanguagetype={ acprogramlanguagetype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramlanguagetype } attributeName="id" label="Id" asyncUpdater={ AcprogramlanguagetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramlanguagetype } attributeName="name" label="Name" asyncUpdater={ AcprogramlanguagetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramlanguagetype } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramlanguagetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramlanguagetype } attributeName="created" label="Created" asyncUpdater={ AcprogramlanguagetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramlanguagetype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramlanguagetypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramlanguagetypeCardCapsule>
    )
}
