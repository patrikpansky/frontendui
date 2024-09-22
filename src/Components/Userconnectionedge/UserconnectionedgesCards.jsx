import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionedgeMediumCard as MediumCard} from './UserconnectionedgeMediumCard';
import { UserconnectionedgeLoadMoreButton as LoadMoreButton} from './UserconnectionedgeLoadMoreButton';
/**
 * 
 */
export const UserconnectionedgesCards = ({ userconnectionedges, children }) => {
    return (
        <>
        <Row>
        { userconnectionedges.map(
            userconnectionedge => <Col xl={4} md={6} xs={12} key={ userconnectionedge.id } ><MediumCard key={ userconnectionedge.id } userconnectionedge={ userconnectionedge } /></Col>
            
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

