import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessonMediumCard as MediumCard} from './AclessonMediumCard';
import { AclessonLoadMoreButton as LoadMoreButton} from './AclessonLoadMoreButton';
/**
 * Entity which represents single lesson included in a topic
 */
export const AclessonsCards = ({ aclessons, children }) => {
    return (
        <>
        <Row>
        { aclessons.map(
            aclesson => <Col xl={4} md={6} xs={12} key={ aclesson.id } ><MediumCard key={ aclesson.id } aclesson={ aclesson } /></Col>
            
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

