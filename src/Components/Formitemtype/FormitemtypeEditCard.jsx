import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemtypeCardCapsule } from './FormitemtypeCardCapsule';

export const FormitemtypeEditCardMutation = `
mutation FormitemtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formitemtypeUpdate(formitemtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formitemtype {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
}`

const FormitemtypeUpdateAsyncAction = CreateAsyncActionFromMutation(FormitemtypeEditCardMutation)

export const FormitemtypeEditCard = ({ formitemtype, children, label=""}) => {
    return (       
        <FormitemtypeCardCapsule formitemtype={ formitemtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemtype } attributeName="id" label="Id" asyncUpdater={ FormitemtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemtype } attributeName="name" label="Name" asyncUpdater={ FormitemtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormitemtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemtype } attributeName="created" label="Created" asyncUpdater={ FormitemtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formitemtype } attributeName="nameen" label="Nameen" asyncUpdater={ FormitemtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormitemtypeCardCapsule>
    )
}
