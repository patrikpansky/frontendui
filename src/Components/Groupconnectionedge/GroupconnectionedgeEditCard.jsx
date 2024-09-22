import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionedgeCardCapsule } from './GroupconnectionedgeCardCapsule';

export const GroupconnectionedgeEditCardMutation = `
mutation GroupconnectionedgeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: groupconnectionedgeUpdate(groupconnectionedge: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: groupconnectionedge {
            __typename
            cursor
        }
    }
}`

const GroupconnectionedgeUpdateAsyncAction = CreateAsyncActionFromMutation(GroupconnectionedgeEditCardMutation)

export const GroupconnectionedgeEditCard = ({ groupconnectionedge, children, label=""}) => {
    return (       
        <GroupconnectionedgeCardCapsule groupconnectionedge={ groupconnectionedge } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ groupconnectionedge } attributeName="cursor" label="Cursor" asyncUpdater={ GroupconnectionedgeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </GroupconnectionedgeCardCapsule>
    )
}
