import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlannedlessonMediumCard as MediumCard} from './PlannedlessonMediumCard';
import { PlannedlessonLoadMoreButton as LoadMoreButton} from './PlannedlessonLoadMoreButton';
/**
 * Entity representing a planned lesson for timetable creation
 */
export const PlannedlessonsCards = ({ plannedlessons, children }) => {
    return (
        <>
        <Row>
        { plannedlessons.map(
            plannedlesson => <Col xl={4} md={6} xs={12} key={ plannedlesson.id } ><MediumCard key={ plannedlesson.id } plannedlesson={ plannedlesson } /></Col>
            
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

