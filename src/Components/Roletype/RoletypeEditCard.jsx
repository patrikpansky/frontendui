import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypeCardCapsule } from './RoletypeCardCapsule';

export const RoletypeEditCardMutation = `
mutation RoletypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: roletypeUpdate(roletype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: roletype {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const RoletypeUpdateAsyncAction = CreateAsyncActionFromMutation(RoletypeEditCardMutation)

export const RoletypeEditCard = ({ roletype, children, label=""}) => {
    return (       
        <RoletypeCardCapsule roletype={ roletype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ roletype } attributeName="id" label="Id" asyncUpdater={ RoletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletype } attributeName="created" label="Created" asyncUpdater={ RoletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletype } attributeName="lastchange" label="Lastchange" asyncUpdater={ RoletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletype } attributeName="name" label="Name" asyncUpdater={ RoletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletype } attributeName="nameen" label="Nameen" asyncUpdater={ RoletypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RoletypeCardCapsule>
    )
}
