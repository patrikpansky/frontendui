import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentstateMediumCard as MediumCard} from './AcprogramstudentstateMediumCard';
import { AcprogramstudentstateLoadMoreButton as LoadMoreButton} from './AcprogramstudentstateLoadMoreButton';
/**
 * Entity which links program and student
 */
export const AcprogramstudentstatesCards = ({ acprogramstudentstates, children }) => {
    return (
        <>
        <Row>
        { acprogramstudentstates.map(
            acprogramstudentstate => <Col xl={4} md={6} xs={12} key={ acprogramstudentstate.id } ><MediumCard key={ acprogramstudentstate.id } acprogramstudentstate={ acprogramstudentstate } /></Col>
            
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

