import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessonCardCapsule } from './AclessonCardCapsule';

export const AclessonLargeCardLayout = ({ aclesson, children, grandchildren}) => {
    // console.log("AclessonLargeCard", aclesson)
    return (
        <AclessonCardCapsule aclesson={ aclesson }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AclessonCardCapsule>
    )
}

