import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventtypeCardCapsule } from './EventtypeCardCapsule';

export const EventtypeEditCardMutation = `
mutation EventtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: eventtypeUpdate(eventtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: eventtype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const EventtypeUpdateAsyncAction = CreateAsyncActionFromMutation(EventtypeEditCardMutation)

export const EventtypeEditCard = ({ eventtype, children, label=""}) => {
    return (       
        <EventtypeCardCapsule eventtype={ eventtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ eventtype } attributeName="id" label="Id" asyncUpdater={ EventtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ eventtype } attributeName="name" label="Name" asyncUpdater={ EventtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ eventtype } attributeName="nameen" label="Nameen" asyncUpdater={ EventtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ eventtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ EventtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ eventtype } attributeName="created" label="Created" asyncUpdater={ EventtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </EventtypeCardCapsule>
    )
}
