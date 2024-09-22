import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionCardCapsule } from './GroupconnectionCardCapsule';

export const GroupconnectionEditCardMutation = `
mutation GroupconnectionEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: groupconnectionUpdate(groupconnection: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: groupconnection {
            __typename
        }
    }
}`

const GroupconnectionUpdateAsyncAction = CreateAsyncActionFromMutation(GroupconnectionEditCardMutation)

export const GroupconnectionEditCard = ({ groupconnection, children, label=""}) => {
    return (       
        <GroupconnectionCardCapsule groupconnection={ groupconnection } label={label} >
            {children}
        </GroupconnectionCardCapsule>
    )
}
