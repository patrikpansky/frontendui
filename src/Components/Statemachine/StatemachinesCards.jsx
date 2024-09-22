import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatemachineMediumCard as MediumCard} from './StatemachineMediumCard';
import { StatemachineLoadMoreButton as LoadMoreButton} from './StatemachineLoadMoreButton';
/**
 * Entity representing a state machine
 */
export const StatemachinesCards = ({ statemachines, children }) => {
    return (
        <>
        <Row>
        { statemachines.map(
            statemachine => <Col xl={4} md={6} xs={12} key={ statemachine.id } ><MediumCard key={ statemachine.id } statemachine={ statemachine } /></Col>
            
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

