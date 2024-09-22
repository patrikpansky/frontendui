import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MilestoneMediumCard as MediumCard} from './MilestoneMediumCard';
import { MilestoneLoadMoreButton as LoadMoreButton} from './MilestoneLoadMoreButton';
/**
 * Entity representing a milestone
 */
export const MilestonesCards = ({ milestones, children }) => {
    return (
        <>
        <Row>
        { milestones.map(
            milestone => <Col xl={4} md={6} xs={12} key={ milestone.id } ><MediumCard key={ milestone.id } milestone={ milestone } /></Col>
            
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

