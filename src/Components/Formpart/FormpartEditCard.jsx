import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormpartCardCapsule } from './FormpartCardCapsule';

export const FormpartEditCardMutation = `
mutation FormpartEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formpartUpdate(formpart: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formpart {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }
}`

const FormpartUpdateAsyncAction = CreateAsyncActionFromMutation(FormpartEditCardMutation)

export const FormpartEditCard = ({ formpart, children, label=""}) => {
    return (       
        <FormpartCardCapsule formpart={ formpart } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="id" label="Id" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="name" label="Name" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="created" label="Created" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="nameen" label="Nameen" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formpart } attributeName="order" label="Order" asyncUpdater={ FormpartUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormpartCardCapsule>
    )
}
