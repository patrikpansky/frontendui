import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityMediumCard as MediumCard} from './FacilityMediumCard';
import { FacilityLoadMoreButton as LoadMoreButton} from './FacilityLoadMoreButton';
/**
 * Entity representing a Facility
 */
export const FacilitysCards = ({ facilitys, children }) => {
    return (
        <>
        <Row>
        { facilitys.map(
            facility => <Col xl={4} md={6} xs={12} key={ facility.id } ><MediumCard key={ facility.id } facility={ facility } /></Col>
            
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

