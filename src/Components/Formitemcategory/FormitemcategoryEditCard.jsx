import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemcategoryCardCapsule } from './FormitemcategoryCardCapsule';

export const FormitemcategoryEditCardMutation = `
mutation FormitemcategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formitemcategoryUpdate(formitemcategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formitemcategory {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
}`

const FormitemcategoryUpdateAsyncAction = CreateAsyncActionFromMutation(FormitemcategoryEditCardMutation)

export const FormitemcategoryEditCard = ({ formitemcategory, children, label=""}) => {
    return (       
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemcategory } attributeName="id" label="Id" asyncUpdater={ FormitemcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemcategory } attributeName="name" label="Name" asyncUpdater={ FormitemcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemcategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormitemcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemcategory } attributeName="created" label="Created" asyncUpdater={ FormitemcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemcategory } attributeName="nameen" label="Nameen" asyncUpdater={ FormitemcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormitemcategoryCardCapsule>
    )
}
