import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoleCardCapsule } from './RoleCardCapsule';

export const RoleLargeCardLayout = ({ role, children, grandchildren}) => {
    // console.log("RoleLargeCard", role)
    return (
        <RoleCardCapsule role={ role }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RoleCardCapsule>
    )
}

