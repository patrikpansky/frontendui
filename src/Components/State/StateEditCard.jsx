import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StateCardCapsule } from './StateCardCapsule';

export const StateEditCardMutation = `
mutation StateEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: stateUpdate(state: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: state {
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
        }
    }
}`

const StateUpdateAsyncAction = CreateAsyncActionFromMutation(StateEditCardMutation)

export const StateEditCard = ({ state, children, label=""}) => {
    return (       
        <StateCardCapsule state={ state } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="id" label="Id" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="created" label="Created" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="lastchange" label="Lastchange" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="name" label="Name" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="nameen" label="Nameen" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ state } attributeName="order" label="Order" asyncUpdater={ StateUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </StateCardCapsule>
    )
}
