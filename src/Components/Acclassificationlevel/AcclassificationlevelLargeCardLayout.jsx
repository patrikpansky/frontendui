import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationlevelCardCapsule } from './AcclassificationlevelCardCapsule';

export const AcclassificationlevelLargeCardLayout = ({ acclassificationlevel, children, grandchildren}) => {
    // console.log("AcclassificationlevelLargeCard", acclassificationlevel)
    return (
        <AcclassificationlevelCardCapsule acclassificationlevel={ acclassificationlevel }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcclassificationlevelCardCapsule>
    )
}

