import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StateMediumCard as MediumCard} from './StateMediumCard';
import { StateLoadMoreButton as LoadMoreButton} from './StateLoadMoreButton';
/**
 * Entity representing a state of state machine
 */
export const StatesCards = ({ states, children }) => {
    return (
        <>
        <Row>
        { states.map(
            state => <Col xl={4} md={6} xs={12} key={ state.id } ><MediumCard key={ state.id } state={ state } /></Col>
            
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

