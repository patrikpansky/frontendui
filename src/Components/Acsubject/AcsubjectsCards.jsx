import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsubjectMediumCard as MediumCard} from './AcsubjectMediumCard';
import { AcsubjectLoadMoreButton as LoadMoreButton} from './AcsubjectLoadMoreButton';
/**
 * Entity which connects programs and semesters, includes informations about subjects (divided into semesters)
 */
export const AcsubjectsCards = ({ acsubjects, children }) => {
    return (
        <>
        <Row>
        { acsubjects.map(
            acsubject => <Col xl={4} md={6} xs={12} key={ acsubject.id } ><MediumCard key={ acsubject.id } acsubject={ acsubject } /></Col>
            
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

