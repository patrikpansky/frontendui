import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramCardCapsule } from './AcprogramCardCapsule';

export const AcprogramEditCardMutation = `
mutation AcprogramEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramUpdate(acprogram: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogram {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramEditCardMutation)

export const AcprogramEditCard = ({ acprogram, children, label=""}) => {
    return (       
        <AcprogramCardCapsule acprogram={ acprogram } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogram } attributeName="id" label="Id" asyncUpdater={ AcprogramUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogram } attributeName="name" label="Name" asyncUpdater={ AcprogramUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogram } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogram } attributeName="created" label="Created" asyncUpdater={ AcprogramUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogram } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramCardCapsule>
    )
}
