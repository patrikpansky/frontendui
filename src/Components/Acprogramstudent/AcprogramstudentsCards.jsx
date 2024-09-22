import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentMediumCard as MediumCard} from './AcprogramstudentMediumCard';
import { AcprogramstudentLoadMoreButton as LoadMoreButton} from './AcprogramstudentLoadMoreButton';
/**
 * Entity which links program and student
 */
export const AcprogramstudentsCards = ({ acprogramstudents, children }) => {
    return (
        <>
        <Row>
        { acprogramstudents.map(
            acprogramstudent => <Col xl={4} md={6} xs={12} key={ acprogramstudent.id } ><MediumCard key={ acprogramstudent.id } acprogramstudent={ acprogramstudent } /></Col>
            
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

