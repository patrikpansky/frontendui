import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoleCardCapsule } from './RoleCardCapsule';

export const RoleEditCardMutation = `
mutation RoleEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: roleUpdate(role: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: role {
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }
}`

const RoleUpdateAsyncAction = CreateAsyncActionFromMutation(RoleEditCardMutation)

export const RoleEditCard = ({ role, children, label=""}) => {
    return (       
        <RoleCardCapsule role={ role } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="id" label="Id" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="created" label="Created" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="lastchange" label="Lastchange" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="valid" label="Valid" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="startdate" label="Startdate" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ role } attributeName="enddate" label="Enddate" asyncUpdater={ RoleUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RoleCardCapsule>
    )
}
