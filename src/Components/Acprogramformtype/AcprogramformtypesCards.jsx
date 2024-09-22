import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramformtypeMediumCard as MediumCard} from './AcprogramformtypeMediumCard';
import { AcprogramformtypeLoadMoreButton as LoadMoreButton} from './AcprogramformtypeLoadMoreButton';
/**
 * Program form type (Present, distant, ...)
 */
export const AcprogramformtypesCards = ({ acprogramformtypes, children }) => {
    return (
        <>
        <Row>
        { acprogramformtypes.map(
            acprogramformtype => <Col xl={4} md={6} xs={12} key={ acprogramformtype.id } ><MediumCard key={ acprogramformtype.id } acprogramformtype={ acprogramformtype } /></Col>
            
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

