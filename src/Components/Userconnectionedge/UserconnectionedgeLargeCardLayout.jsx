import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionedgeCardCapsule } from './UserconnectionedgeCardCapsule';

export const UserconnectionedgeLargeCardLayout = ({ userconnectionedge, children, grandchildren}) => {
    // console.log("UserconnectionedgeLargeCard", userconnectionedge)
    return (
        <UserconnectionedgeCardCapsule userconnectionedge={ userconnectionedge }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </UserconnectionedgeCardCapsule>
    )
}

