import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemCardCapsule } from './FormitemCardCapsule';

export const FormitemEditCardMutation = `
mutation FormitemEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formitemUpdate(formitem: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formitem {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
            value
        }
    }
}`

const FormitemUpdateAsyncAction = CreateAsyncActionFromMutation(FormitemEditCardMutation)

export const FormitemEditCard = ({ formitem, children, label=""}) => {
    return (       
        <FormitemCardCapsule formitem={ formitem } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="id" label="Id" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="name" label="Name" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="created" label="Created" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="nameen" label="Nameen" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="order" label="Order" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitem } attributeName="value" label="Value" asyncUpdater={ FormitemUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormitemCardCapsule>
    )
}
