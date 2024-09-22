import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventCardCapsule } from './EventCardCapsule';

export const EventLargeCardLayout = ({ event, children, grandchildren}) => {
    // console.log("EventLargeCard", event)
    return (
        <EventCardCapsule event={ event }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </EventCardCapsule>
    )
}

