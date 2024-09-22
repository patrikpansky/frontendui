import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilitytypeMediumCard as MediumCard} from './FacilitytypeMediumCard';
import { FacilitytypeLoadMoreButton as LoadMoreButton} from './FacilitytypeLoadMoreButton';
/**
 * Entity representing a facility type
 */
export const FacilitytypesCards = ({ facilitytypes, children }) => {
    return (
        <>
        <Row>
        { facilitytypes.map(
            facilitytype => <Col xl={4} md={6} xs={12} key={ facilitytype.id } ><MediumCard key={ facilitytype.id } facilitytype={ facilitytype } /></Col>
            
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

