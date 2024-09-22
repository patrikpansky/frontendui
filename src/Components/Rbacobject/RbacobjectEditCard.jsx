import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RbacobjectCardCapsule } from './RbacobjectCardCapsule';

export const RbacobjectEditCardMutation = `
mutation RbacobjectEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: rbacobjectUpdate(rbacobject: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: rbacobject {
            __typename
            id
        }
    }
}`

const RbacobjectUpdateAsyncAction = CreateAsyncActionFromMutation(RbacobjectEditCardMutation)

export const RbacobjectEditCard = ({ rbacobject, children, label=""}) => {
    return (       
        <RbacobjectCardCapsule rbacobject={ rbacobject } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ rbacobject } attributeName="id" label="Id" asyncUpdater={ RbacobjectUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RbacobjectCardCapsule>
    )
}
