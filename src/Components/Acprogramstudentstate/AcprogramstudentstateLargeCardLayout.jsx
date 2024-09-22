import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramstudentstateCardCapsule } from './AcprogramstudentstateCardCapsule';

export const AcprogramstudentstateLargeCardLayout = ({ acprogramstudentstate, children, grandchildren}) => {
    // console.log("AcprogramstudentstateLargeCard", acprogramstudentstate)
    return (
        <AcprogramstudentstateCardCapsule acprogramstudentstate={ acprogramstudentstate }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramstudentstateCardCapsule>
    )
}

