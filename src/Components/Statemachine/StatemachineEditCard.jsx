import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatemachineCardCapsule } from './StatemachineCardCapsule';

export const StatemachineEditCardMutation = `
mutation StatemachineEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: statemachineUpdate(statemachine: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: statemachine {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const StatemachineUpdateAsyncAction = CreateAsyncActionFromMutation(StatemachineEditCardMutation)

export const StatemachineEditCard = ({ statemachine, children, label=""}) => {
    return (       
        <StatemachineCardCapsule statemachine={ statemachine } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ statemachine } attributeName="id" label="Id" asyncUpdater={ StatemachineUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statemachine } attributeName="created" label="Created" asyncUpdater={ StatemachineUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statemachine } attributeName="lastchange" label="Lastchange" asyncUpdater={ StatemachineUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statemachine } attributeName="name" label="Name" asyncUpdater={ StatemachineUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statemachine } attributeName="nameen" label="Nameen" asyncUpdater={ StatemachineUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </StatemachineCardCapsule>
    )
}
