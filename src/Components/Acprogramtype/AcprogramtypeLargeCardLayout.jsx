import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtypeCardCapsule } from './AcprogramtypeCardCapsule';

export const AcprogramtypeLargeCardLayout = ({ acprogramtype, children, grandchildren}) => {
    // console.log("AcprogramtypeLargeCard", acprogramtype)
    return (
        <AcprogramtypeCardCapsule acprogramtype={ acprogramtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramtypeCardCapsule>
    )
}

