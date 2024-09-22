import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ActopicMediumCard as MediumCard} from './ActopicMediumCard';
import { ActopicLoadMoreButton as LoadMoreButton} from './ActopicLoadMoreButton';
/**
 * Entity which represents a theme included in semester of subject
 */
export const ActopicsCards = ({ actopics, children }) => {
    return (
        <>
        <Row>
        { actopics.map(
            actopic => <Col xl={4} md={6} xs={12} key={ actopic.id } ><MediumCard key={ actopic.id } actopic={ actopic } /></Col>
            
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

