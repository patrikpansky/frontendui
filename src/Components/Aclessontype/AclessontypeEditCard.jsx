import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessontypeCardCapsule } from './AclessontypeCardCapsule';

export const AclessontypeEditCardMutation = `
mutation AclessontypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: aclessontypeUpdate(aclessontype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: aclessontype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AclessontypeUpdateAsyncAction = CreateAsyncActionFromMutation(AclessontypeEditCardMutation)

export const AclessontypeEditCard = ({ aclessontype, children, label=""}) => {
    return (       
        <AclessontypeCardCapsule aclessontype={ aclessontype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ aclessontype } attributeName="id" label="Id" asyncUpdater={ AclessontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclessontype } attributeName="name" label="Name" asyncUpdater={ AclessontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclessontype } attributeName="nameen" label="Nameen" asyncUpdater={ AclessontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclessontype } attributeName="created" label="Created" asyncUpdater={ AclessontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclessontype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AclessontypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AclessontypeCardCapsule>
    )
}
