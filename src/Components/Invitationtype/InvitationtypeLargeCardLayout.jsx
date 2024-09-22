import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { InvitationtypeCardCapsule } from './InvitationtypeCardCapsule';

export const InvitationtypeLargeCardLayout = ({ invitationtype, children, grandchildren}) => {
    // console.log("InvitationtypeLargeCard", invitationtype)
    return (
        <InvitationtypeCardCapsule invitationtype={ invitationtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </InvitationtypeCardCapsule>
    )
}

