import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramlanguagetypeMediumCard as MediumCard} from './AcprogramlanguagetypeMediumCard';
import { AcprogramlanguagetypeLoadMoreButton as LoadMoreButton} from './AcprogramlanguagetypeLoadMoreButton';
/**
 * Study program language
 */
export const AcprogramlanguagetypesCards = ({ acprogramlanguagetypes, children }) => {
    return (
        <>
        <Row>
        { acprogramlanguagetypes.map(
            acprogramlanguagetype => <Col xl={4} md={6} xs={12} key={ acprogramlanguagetype.id } ><MediumCard key={ acprogramlanguagetype.id } acprogramlanguagetype={ acprogramlanguagetype } /></Col>
            
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

