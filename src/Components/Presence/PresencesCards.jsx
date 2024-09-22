import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresenceMediumCard as MediumCard} from './PresenceMediumCard';
import { PresenceLoadMoreButton as LoadMoreButton} from './PresenceLoadMoreButton';
/**
 * Describes a relation of an user to the event by invitation (like invited) and participation (like absent)
 */
export const PresencesCards = ({ presences, children }) => {
    return (
        <>
        <Row>
        { presences.map(
            presence => <Col xl={4} md={6} xs={12} key={ presence.id } ><MediumCard key={ presence.id } presence={ presence } /></Col>
            
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

