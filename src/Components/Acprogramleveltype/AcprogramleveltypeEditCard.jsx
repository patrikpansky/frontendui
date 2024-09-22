import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramleveltypeCardCapsule } from './AcprogramleveltypeCardCapsule';

export const AcprogramleveltypeEditCardMutation = `
mutation AcprogramleveltypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramleveltypeUpdate(acprogramleveltype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramleveltype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramleveltypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramleveltypeEditCardMutation)

export const AcprogramleveltypeEditCard = ({ acprogramleveltype, children, label=""}) => {
    return (       
        <AcprogramleveltypeCardCapsule acprogramleveltype={ acprogramleveltype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramleveltype } attributeName="id" label="Id" asyncUpdater={ AcprogramleveltypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramleveltype } attributeName="name" label="Name" asyncUpdater={ AcprogramleveltypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramleveltype } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramleveltypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramleveltype } attributeName="created" label="Created" asyncUpdater={ AcprogramleveltypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramleveltype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramleveltypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramleveltypeCardCapsule>
    )
}
