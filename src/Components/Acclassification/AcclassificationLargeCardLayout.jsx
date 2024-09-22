import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationCardCapsule } from './AcclassificationCardCapsule';

export const AcclassificationLargeCardLayout = ({ acclassification, children, grandchildren}) => {
    // console.log("AcclassificationLargeCard", acclassification)
    return (
        <AcclassificationCardCapsule acclassification={ acclassification }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcclassificationCardCapsule>
    )
}

