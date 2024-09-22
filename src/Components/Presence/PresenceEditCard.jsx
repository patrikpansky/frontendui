import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresenceCardCapsule } from './PresenceCardCapsule';

export const PresenceEditCardMutation = `
mutation PresenceEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: presenceUpdate(presence: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: presence {
            __typename
            id
            lastchange
            created
        }
    }
}`

const PresenceUpdateAsyncAction = CreateAsyncActionFromMutation(PresenceEditCardMutation)

export const PresenceEditCard = ({ presence, children, label=""}) => {
    return (       
        <PresenceCardCapsule presence={ presence } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ presence } attributeName="id" label="Id" asyncUpdater={ PresenceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presence } attributeName="lastchange" label="Lastchange" asyncUpdater={ PresenceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presence } attributeName="created" label="Created" asyncUpdater={ PresenceUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PresenceCardCapsule>
    )
}
