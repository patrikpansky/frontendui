import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityeventstatetypeMediumCard as MediumCard} from './FacilityeventstatetypeMediumCard';
import { FacilityeventstatetypeLoadMoreButton as LoadMoreButton} from './FacilityeventstatetypeLoadMoreButton';
/**
 * Entity representing a facility type
 */
export const FacilityeventstatetypesCards = ({ facilityeventstatetypes, children }) => {
    return (
        <>
        <Row>
        { facilityeventstatetypes.map(
            facilityeventstatetype => <Col xl={4} md={6} xs={12} key={ facilityeventstatetype.id } ><MediumCard key={ facilityeventstatetype.id } facilityeventstatetype={ facilityeventstatetype } /></Col>
            
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

