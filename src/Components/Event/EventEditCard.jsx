import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventCardCapsule } from './EventCardCapsule';

export const EventEditCardMutation = `
mutation EventEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: eventUpdate(event: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: event {
            __typename
            id
            name
            nameEn
            lastchange
            created
            duration
            description
            place
            placeId
            startdate
            enddate
        }
    }
}`

const EventUpdateAsyncAction = CreateAsyncActionFromMutation(EventEditCardMutation)

export const EventEditCard = ({ event, children, label=""}) => {
    return (       
        <EventCardCapsule event={ event } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="id" label="Id" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="name" label="Name" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="nameen" label="Nameen" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="lastchange" label="Lastchange" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="created" label="Created" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="duration" label="Duration" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="description" label="Description" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="place" label="Place" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="placeid" label="Placeid" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="startdate" label="Startdate" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ event } attributeName="enddate" label="Enddate" asyncUpdater={ EventUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </EventCardCapsule>
    )
}
