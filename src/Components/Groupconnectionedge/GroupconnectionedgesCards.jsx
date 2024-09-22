import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionedgeMediumCard as MediumCard} from './GroupconnectionedgeMediumCard';
import { GroupconnectionedgeLoadMoreButton as LoadMoreButton} from './GroupconnectionedgeLoadMoreButton';
/**
 * 
 */
export const GroupconnectionedgesCards = ({ groupconnectionedges, children }) => {
    return (
        <>
        <Row>
        { groupconnectionedges.map(
            groupconnectionedge => <Col xl={4} md={6} xs={12} key={ groupconnectionedge.id } ><MediumCard key={ groupconnectionedge.id } groupconnectionedge={ groupconnectionedge } /></Col>
            
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

