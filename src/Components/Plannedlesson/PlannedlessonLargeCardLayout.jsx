import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlannedlessonCardCapsule } from './PlannedlessonCardCapsule';

export const PlannedlessonLargeCardLayout = ({ plannedlesson, children, grandchildren}) => {
    // console.log("PlannedlessonLargeCard", plannedlesson)
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PlannedlessonCardCapsule>
    )
}

