import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtypeMediumCard as MediumCard} from './AcprogramtypeMediumCard';
import { AcprogramtypeLoadMoreButton as LoadMoreButton} from './AcprogramtypeLoadMoreButton';
/**
 * Encapsulation of language, level, type etc. of program. This is intermediate entity for acredited program and its types
 */
export const AcprogramtypesCards = ({ acprogramtypes, children }) => {
    return (
        <>
        <Row>
        { acprogramtypes.map(
            acprogramtype => <Col xl={4} md={6} xs={12} key={ acprogramtype.id } ><MediumCard key={ acprogramtype.id } acprogramtype={ acprogramtype } /></Col>
            
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

