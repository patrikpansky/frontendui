import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlanMediumCard as MediumCard} from './PlanMediumCard';
import { PlanLoadMoreButton as LoadMoreButton} from './PlanLoadMoreButton';
/**
 * Entity representing a study plan for timetable creation
 */
export const PlansCards = ({ plans, children }) => {
    return (
        <>
        <Row>
        { plans.map(
            plan => <Col xl={4} md={6} xs={12} key={ plan.id } ><MediumCard key={ plan.id } plan={ plan } /></Col>
            
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

