import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { EventtypeMediumCard as MediumCard} from './EventtypeMediumCard';
import { EventtypeLoadMoreButton as LoadMoreButton} from './EventtypeLoadMoreButton';
/**
 * Represents an event type
 */
export const EventtypesCards = ({ eventtypes, children }) => {
    return (
        <>
        <Row>
        { eventtypes.map(
            eventtype => <Col xl={4} md={6} xs={12} key={ eventtype.id } ><MediumCard key={ eventtype.id } eventtype={ eventtype } /></Col>
            
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

