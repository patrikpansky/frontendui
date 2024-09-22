import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ActopicCardCapsule } from './ActopicCardCapsule';

export const ActopicLargeCardLayout = ({ actopic, children, grandchildren}) => {
    // console.log("ActopicLargeCard", actopic)
    return (
        <ActopicCardCapsule actopic={ actopic }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ActopicCardCapsule>
    )
}

