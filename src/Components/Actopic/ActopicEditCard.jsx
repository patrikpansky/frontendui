import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ActopicCardCapsule } from './ActopicCardCapsule';

export const ActopicEditCardMutation = `
mutation ActopicEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: actopicUpdate(actopic: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: actopic {
            __typename
            id
            name
            nameEn
            created
            lastchange
            order
        }
    }
}`

const ActopicUpdateAsyncAction = CreateAsyncActionFromMutation(ActopicEditCardMutation)

export const ActopicEditCard = ({ actopic, children, label=""}) => {
    return (       
        <ActopicCardCapsule actopic={ actopic } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="id" label="Id" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="name" label="Name" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="nameen" label="Nameen" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="created" label="Created" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="lastchange" label="Lastchange" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ actopic } attributeName="order" label="Order" asyncUpdater={ ActopicUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ActopicCardCapsule>
    )
}
