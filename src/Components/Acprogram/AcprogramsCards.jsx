import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramMediumCard as MediumCard} from './AcprogramMediumCard';
import { AcprogramLoadMoreButton as LoadMoreButton} from './AcprogramLoadMoreButton';
/**
 * Entity representing acredited study programs
 */
export const AcprogramsCards = ({ acprograms, children }) => {
    return (
        <>
        <Row>
        { acprograms.map(
            acprogram => <Col xl={4} md={6} xs={12} key={ acprogram.id } ><MediumCard key={ acprogram.id } acprogram={ acprogram } /></Col>
            
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

