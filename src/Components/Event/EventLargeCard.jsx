import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventMediumCard } from './EventMediumCard'
import { EventLink } from './EventLink'

export const EventLargeCard = ({event, children}) => {
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
        <Row>
            <Col md={3}>
                <EventMediumCard event={event}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(event)}
            </Col>
        </Row>
    </CardCapsule>

    )
}
