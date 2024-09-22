import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramCardCapsule } from './AcprogramCardCapsule';

export const AcprogramLargeCardLayout = ({ acprogram, children, grandchildren}) => {
    // console.log("AcprogramLargeCard", acprogram)
    return (
        <AcprogramCardCapsule acprogram={ acprogram }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramCardCapsule>
    )
}

