import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventMediumCard as MediumCard} from './EventMediumCard';
import { EventLoadMoreButton as LoadMoreButton} from './EventLoadMoreButton';
/**
 * Entity representing an event (calendar item)
 */
export const EventsCards = ({ events, children }) => {
    return (
        <>
        <Row>
        { events.map(
            event => <Col xl={4} md={6} xs={12} key={ event.id } ><MediumCard key={ event.id } event={ event } /></Col>
            
        )}
        </Row>
        <Row>
            <Col xl={12} md={12} xs={12} >
                {children}
            </Col>
        </Row>
        </>
    )
}

