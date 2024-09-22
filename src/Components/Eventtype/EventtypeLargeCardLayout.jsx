import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventtypeCardCapsule } from './EventtypeCardCapsule';

export const EventtypeLargeCardLayout = ({ eventtype, children, grandchildren}) => {
    // console.log("EventtypeLargeCard", eventtype)
    return (
        <EventtypeCardCapsule eventtype={ eventtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </EventtypeCardCapsule>
    )
}

