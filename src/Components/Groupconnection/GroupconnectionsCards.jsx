import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionMediumCard as MediumCard} from './GroupconnectionMediumCard';
import { GroupconnectionLoadMoreButton as LoadMoreButton} from './GroupconnectionLoadMoreButton';
/**
 * 
 */
export const GroupconnectionsCards = ({ groupconnections, children }) => {
    return (
        <>
        <Row>
        { groupconnections.map(
            groupconnection => <Col xl={4} md={6} xs={12} key={ groupconnection.id } ><MediumCard key={ groupconnection.id } groupconnection={ groupconnection } /></Col>
            
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

