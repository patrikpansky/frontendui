import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramleveltypeMediumCard as MediumCard} from './AcprogramleveltypeMediumCard';
import { AcprogramleveltypeLoadMoreButton as LoadMoreButton} from './AcprogramleveltypeLoadMoreButton';
/**
 * bachelor, ...
 */
export const AcprogramleveltypesCards = ({ acprogramleveltypes, children }) => {
    return (
        <>
        <Row>
        { acprogramleveltypes.map(
            acprogramleveltype => <Col xl={4} md={6} xs={12} key={ acprogramleveltype.id } ><MediumCard key={ acprogramleveltype.id } acprogramleveltype={ acprogramleveltype } /></Col>
            
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

