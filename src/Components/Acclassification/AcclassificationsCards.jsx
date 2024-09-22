import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationMediumCard as MediumCard} from './AcclassificationMediumCard';
import { AcclassificationLoadMoreButton as LoadMoreButton} from './AcclassificationLoadMoreButton';
/**
 * Entity which holds a exam result for a subject semester and user / student
 */
export const AcclassificationsCards = ({ acclassifications, children }) => {
    return (
        <>
        <Row>
        { acclassifications.map(
            acclassification => <Col xl={4} md={6} xs={12} key={ acclassification.id } ><MediumCard key={ acclassification.id } acclassification={ acclassification } /></Col>
            
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

