import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationtypeMediumCard as MediumCard} from './AcclassificationtypeMediumCard';
import { AcclassificationtypeLoadMoreButton as LoadMoreButton} from './AcclassificationtypeLoadMoreButton';
/**
 * Classification at the end of semester
 */
export const AcclassificationtypesCards = ({ acclassificationtypes, children }) => {
    return (
        <>
        <Row>
        { acclassificationtypes.map(
            acclassificationtype => <Col xl={4} md={6} xs={12} key={ acclassificationtype.id } ><MediumCard key={ acclassificationtype.id } acclassificationtype={ acclassificationtype } /></Col>
            
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

