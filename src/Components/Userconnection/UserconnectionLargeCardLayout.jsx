import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserconnectionCardCapsule } from './UserconnectionCardCapsule';

export const UserconnectionLargeCardLayout = ({ userconnection, children, grandchildren}) => {
    // console.log("UserconnectionLargeCard", userconnection)
    return (
        <UserconnectionCardCapsule userconnection={ userconnection }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </UserconnectionCardCapsule>
    )
}

