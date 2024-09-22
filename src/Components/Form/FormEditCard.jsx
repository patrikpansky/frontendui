import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormCardCapsule } from './FormCardCapsule';

export const FormEditCardMutation = `
mutation FormEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formUpdate(form: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: form {
            __typename
            id
            name
            lastchange
            created
            nameEn
            valid
            status
        }
    }
}`

const FormUpdateAsyncAction = CreateAsyncActionFromMutation(FormEditCardMutation)

export const FormEditCard = ({ form, children, label=""}) => {
    return (       
        <FormCardCapsule form={ form } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="id" label="Id" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="name" label="Name" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="created" label="Created" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="nameen" label="Nameen" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="valid" label="Valid" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ form } attributeName="status" label="Status" asyncUpdater={ FormUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormCardCapsule>
    )
}
