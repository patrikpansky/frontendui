import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsubjectCardCapsule } from './AcsubjectCardCapsule';

export const AcsubjectLargeCardLayout = ({ acsubject, children, grandchildren}) => {
    // console.log("AcsubjectLargeCard", acsubject)
    return (
        <AcsubjectCardCapsule acsubject={ acsubject }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcsubjectCardCapsule>
    )
}

