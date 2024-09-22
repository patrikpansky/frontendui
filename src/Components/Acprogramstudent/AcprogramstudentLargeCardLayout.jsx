import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentCardCapsule } from './AcprogramstudentCardCapsule';

export const AcprogramstudentLargeCardLayout = ({ acprogramstudent, children, grandchildren}) => {
    // console.log("AcprogramstudentLargeCard", acprogramstudent)
    return (
        <AcprogramstudentCardCapsule acprogramstudent={ acprogramstudent }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramstudentCardCapsule>
    )
}

