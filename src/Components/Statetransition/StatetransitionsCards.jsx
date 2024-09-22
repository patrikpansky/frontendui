import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatetransitionMediumCard as MediumCard} from './StatetransitionMediumCard';
import { StatetransitionLoadMoreButton as LoadMoreButton} from './StatetransitionLoadMoreButton';
/**
 * Entity representing an entity type
 */
export const StatetransitionsCards = ({ statetransitions, children }) => {
    return (
        <>
        <Row>
        { statetransitions.map(
            statetransition => <Col xl={4} md={6} xs={12} key={ statetransition.id } ><MediumCard key={ statetransition.id } statetransition={ statetransition } /></Col>
            
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

