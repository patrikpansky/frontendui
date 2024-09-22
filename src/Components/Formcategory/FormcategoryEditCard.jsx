import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormcategoryCardCapsule } from './FormcategoryCardCapsule';

export const FormcategoryEditCardMutation = `
mutation FormcategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formcategoryUpdate(formcategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formcategory {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
}`

const FormcategoryUpdateAsyncAction = CreateAsyncActionFromMutation(FormcategoryEditCardMutation)

export const FormcategoryEditCard = ({ formcategory, children, label=""}) => {
    return (       
        <FormcategoryCardCapsule formcategory={ formcategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formcategory } attributeName="id" label="Id" asyncUpdater={ FormcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formcategory } attributeName="name" label="Name" asyncUpdater={ FormcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formcategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formcategory } attributeName="created" label="Created" asyncUpdater={ FormcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formcategory } attributeName="nameen" label="Nameen" asyncUpdater={ FormcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormcategoryCardCapsule>
    )
}
