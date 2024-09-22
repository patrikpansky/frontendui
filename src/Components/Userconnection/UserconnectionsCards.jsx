import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionMediumCard as MediumCard} from './UserconnectionMediumCard';
import { UserconnectionLoadMoreButton as LoadMoreButton} from './UserconnectionLoadMoreButton';
/**
 * 
 */
export const UserconnectionsCards = ({ userconnections, children }) => {
    return (
        <>
        <Row>
        { userconnections.map(
            userconnection => <Col xl={4} md={6} xs={12} key={ userconnection.id } ><MediumCard key={ userconnection.id } userconnection={ userconnection } /></Col>
            
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

