import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlannedlessonCardCapsule } from './PlannedlessonCardCapsule';

export const PlannedlessonEditCardMutation = `
mutation PlannedlessonEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: plannedlessonUpdate(plannedlesson: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: plannedlesson {
            __typename
            id
            name
            lastchange
            created
            order
            length
        }
    }
}`

const PlannedlessonUpdateAsyncAction = CreateAsyncActionFromMutation(PlannedlessonEditCardMutation)

export const PlannedlessonEditCard = ({ plannedlesson, children, label=""}) => {
    return (       
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="id" label="Id" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="name" label="Name" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="lastchange" label="Lastchange" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="created" label="Created" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="order" label="Order" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plannedlesson } attributeName="length" label="Length" asyncUpdater={ PlannedlessonUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PlannedlessonCardCapsule>
    )
}
