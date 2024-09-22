import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramleveltypeCardCapsule } from './AcprogramleveltypeCardCapsule';

export const AcprogramleveltypeLargeCardLayout = ({ acprogramleveltype, children, grandchildren}) => {
    // console.log("AcprogramleveltypeLargeCard", acprogramleveltype)
    return (
        <AcprogramleveltypeCardCapsule acprogramleveltype={ acprogramleveltype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramleveltypeCardCapsule>
    )
}

