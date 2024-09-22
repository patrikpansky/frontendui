import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RolecategoryCardCapsule } from './RolecategoryCardCapsule';

export const RolecategoryEditCardMutation = `
mutation RolecategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: rolecategoryUpdate(rolecategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: rolecategory {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const RolecategoryUpdateAsyncAction = CreateAsyncActionFromMutation(RolecategoryEditCardMutation)

export const RolecategoryEditCard = ({ rolecategory, children, label=""}) => {
    return (       
        <RolecategoryCardCapsule rolecategory={ rolecategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ rolecategory } attributeName="id" label="Id" asyncUpdater={ RolecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ rolecategory } attributeName="created" label="Created" asyncUpdater={ RolecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ rolecategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ RolecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ rolecategory } attributeName="name" label="Name" asyncUpdater={ RolecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ rolecategory } attributeName="nameen" label="Nameen" asyncUpdater={ RolecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RolecategoryCardCapsule>
    )
}
