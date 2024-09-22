import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlanCardCapsule } from './PlanCardCapsule';

export const PlanLargeCardLayout = ({ plan, children, grandchildren}) => {
    // console.log("PlanLargeCard", plan)
    return (
        <PlanCardCapsule plan={ plan }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PlanCardCapsule>
    )
}

