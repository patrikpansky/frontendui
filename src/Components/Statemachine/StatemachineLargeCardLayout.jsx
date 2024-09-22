import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatemachineCardCapsule } from './StatemachineCardCapsule';

export const StatemachineLargeCardLayout = ({ statemachine, children, grandchildren}) => {
    // console.log("StatemachineLargeCard", statemachine)
    return (
        <StatemachineCardCapsule statemachine={ statemachine }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </StatemachineCardCapsule>
    )
}

