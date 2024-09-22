import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormtypeCardCapsule } from './FormtypeCardCapsule';

export const FormtypeEditCardMutation = `
mutation FormtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formtypeUpdate(formtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formtype {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
}`

const FormtypeUpdateAsyncAction = CreateAsyncActionFromMutation(FormtypeEditCardMutation)

export const FormtypeEditCard = ({ formtype, children, label=""}) => {
    return (       
        <FormtypeCardCapsule formtype={ formtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formtype } attributeName="id" label="Id" asyncUpdater={ FormtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formtype } attributeName="name" label="Name" asyncUpdater={ FormtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formtype } attributeName="created" label="Created" asyncUpdater={ FormtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formtype } attributeName="nameen" label="Nameen" asyncUpdater={ FormtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormtypeCardCapsule>
    )
}
