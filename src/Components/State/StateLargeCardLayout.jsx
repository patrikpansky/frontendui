import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StateCardCapsule } from './StateCardCapsule';

export const StateLargeCardLayout = ({ state, children, grandchildren}) => {
    // console.log("StateLargeCard", state)
    return (
        <StateCardCapsule state={ state }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </StateCardCapsule>
    )
}

