import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessontypeCardCapsule } from './AclessontypeCardCapsule';

export const AclessontypeLargeCardLayout = ({ aclessontype, children, grandchildren}) => {
    // console.log("AclessontypeLargeCard", aclessontype)
    return (
        <AclessontypeCardCapsule aclessontype={ aclessontype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AclessontypeCardCapsule>
    )
}

