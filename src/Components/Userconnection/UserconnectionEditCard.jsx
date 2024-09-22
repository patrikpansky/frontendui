import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionCardCapsule } from './UserconnectionCardCapsule';

export const UserconnectionEditCardMutation = `
mutation UserconnectionEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: userconnectionUpdate(userconnection: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: userconnection {
            __typename
        }
    }
}`

const UserconnectionUpdateAsyncAction = CreateAsyncActionFromMutation(UserconnectionEditCardMutation)

export const UserconnectionEditCard = ({ userconnection, children, label=""}) => {
    return (       
        <UserconnectionCardCapsule userconnection={ userconnection } label={label} >
            {children}
        </UserconnectionCardCapsule>
    )
}
