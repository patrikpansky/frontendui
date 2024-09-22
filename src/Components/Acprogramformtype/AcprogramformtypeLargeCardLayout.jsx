import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramformtypeCardCapsule } from './AcprogramformtypeCardCapsule';

export const AcprogramformtypeLargeCardLayout = ({ acprogramformtype, children, grandchildren}) => {
    // console.log("AcprogramformtypeLargeCard", acprogramformtype)
    return (
        <AcprogramformtypeCardCapsule acprogramformtype={ acprogramformtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramformtypeCardCapsule>
    )
}

