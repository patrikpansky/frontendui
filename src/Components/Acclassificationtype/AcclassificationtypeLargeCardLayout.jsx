import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationtypeCardCapsule } from './AcclassificationtypeCardCapsule';

export const AcclassificationtypeLargeCardLayout = ({ acclassificationtype, children, grandchildren}) => {
    // console.log("AcclassificationtypeLargeCard", acclassificationtype)
    return (
        <AcclassificationtypeCardCapsule acclassificationtype={ acclassificationtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcclassificationtypeCardCapsule>
    )
}

