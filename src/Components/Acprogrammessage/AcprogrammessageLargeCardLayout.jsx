import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogrammessageCardCapsule } from './AcprogrammessageCardCapsule';

export const AcprogrammessageLargeCardLayout = ({ acprogrammessage, children, grandchildren}) => {
    // console.log("AcprogrammessageLargeCard", acprogrammessage)
    return (
        <AcprogrammessageCardCapsule acprogrammessage={ acprogrammessage }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogrammessageCardCapsule>
    )
}

