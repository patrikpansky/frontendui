import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramlanguagetypeCardCapsule } from './AcprogramlanguagetypeCardCapsule';

export const AcprogramlanguagetypeLargeCardLayout = ({ acprogramlanguagetype, children, grandchildren}) => {
    // console.log("AcprogramlanguagetypeLargeCard", acprogramlanguagetype)
    return (
        <AcprogramlanguagetypeCardCapsule acprogramlanguagetype={ acprogramlanguagetype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramlanguagetypeCardCapsule>
    )
}

