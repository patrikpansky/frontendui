import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserCardCapsule } from './UserCardCapsule';

export const UserLargeCardLayout = ({ user, children, grandchildren}) => {
    // console.log("UserLargeCard", user)
    return (
        <UserCardCapsule user={ user }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </UserCardCapsule>
    )
}

