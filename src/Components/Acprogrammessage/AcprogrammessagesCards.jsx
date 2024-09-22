import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogrammessageMediumCard as MediumCard} from './AcprogrammessageMediumCard';
import { AcprogrammessageLoadMoreButton as LoadMoreButton} from './AcprogrammessageLoadMoreButton';
/**
 * Entity representing acredited study programs
 */
export const AcprogrammessagesCards = ({ acprogrammessages, children }) => {
    return (
        <>
        <Row>
        { acprogrammessages.map(
            acprogrammessage => <Col xl={4} md={6} xs={12} key={ acprogrammessage.id } ><MediumCard key={ acprogrammessage.id } acprogrammessage={ acprogrammessage } /></Col>
            
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

