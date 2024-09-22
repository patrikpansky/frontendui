import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RequesthistoryCardCapsule } from './RequesthistoryCardCapsule';

export const RequesthistoryEditCardMutation = `
mutation RequesthistoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: requesthistoryUpdate(requesthistory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: requesthistory {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
}`

const RequesthistoryUpdateAsyncAction = CreateAsyncActionFromMutation(RequesthistoryEditCardMutation)

export const RequesthistoryEditCard = ({ requesthistory, children, label=""}) => {
    return (       
        <RequesthistoryCardCapsule requesthistory={ requesthistory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ requesthistory } attributeName="id" label="Id" asyncUpdater={ RequesthistoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ requesthistory } attributeName="name" label="Name" asyncUpdater={ RequesthistoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ requesthistory } attributeName="lastchange" label="Lastchange" asyncUpdater={ RequesthistoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ requesthistory } attributeName="created" label="Created" asyncUpdater={ RequesthistoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ requesthistory } attributeName="nameen" label="Nameen" asyncUpdater={ RequesthistoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RequesthistoryCardCapsule>
    )
}
