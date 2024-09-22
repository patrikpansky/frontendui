import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionedgeCardCapsule } from './UserconnectionedgeCardCapsule';

export const UserconnectionedgeEditCardMutation = `
mutation UserconnectionedgeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: userconnectionedgeUpdate(userconnectionedge: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: userconnectionedge {
            __typename
            cursor
        }
    }
}`

const UserconnectionedgeUpdateAsyncAction = CreateAsyncActionFromMutation(UserconnectionedgeEditCardMutation)

export const UserconnectionedgeEditCard = ({ userconnectionedge, children, label=""}) => {
    return (       
        <UserconnectionedgeCardCapsule userconnectionedge={ userconnectionedge } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ userconnectionedge } attributeName="cursor" label="Cursor" asyncUpdater={ UserconnectionedgeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </UserconnectionedgeCardCapsule>
    )
}
