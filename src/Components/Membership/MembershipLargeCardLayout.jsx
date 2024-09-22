import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MembershipCardCapsule } from './MembershipCardCapsule';

export const MembershipLargeCardLayout = ({ membership, children, grandchildren}) => {
    // console.log("MembershipLargeCard", membership)
    return (
        <MembershipCardCapsule membership={ membership }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </MembershipCardCapsule>
    )
}

