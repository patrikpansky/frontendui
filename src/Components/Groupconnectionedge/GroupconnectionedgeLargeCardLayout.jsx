import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionedgeCardCapsule } from './GroupconnectionedgeCardCapsule';

export const GroupconnectionedgeLargeCardLayout = ({ groupconnectionedge, children, grandchildren}) => {
    // console.log("GroupconnectionedgeLargeCard", groupconnectionedge)
    return (
        <GroupconnectionedgeCardCapsule groupconnectionedge={ groupconnectionedge }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </GroupconnectionedgeCardCapsule>
    )
}

