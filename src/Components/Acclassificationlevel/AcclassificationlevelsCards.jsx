import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationlevelMediumCard as MediumCard} from './AcclassificationlevelMediumCard';
import { AcclassificationlevelLoadMoreButton as LoadMoreButton} from './AcclassificationlevelLoadMoreButton';
/**
 * Mark which student could get as an exam evaluation
 */
export const AcclassificationlevelsCards = ({ acclassificationlevels, children }) => {
    return (
        <>
        <Row>
        { acclassificationlevels.map(
            acclassificationlevel => <Col xl={4} md={6} xs={12} key={ acclassificationlevel.id } ><MediumCard key={ acclassificationlevel.id } acclassificationlevel={ acclassificationlevel } /></Col>
            
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

