import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AnswerCardCapsule } from './AnswerCardCapsule';

export const AnswerLargeCardLayout = ({ answer, children, grandchildren}) => {
    // console.log("AnswerLargeCard", answer)
    return (
        <AnswerCardCapsule answer={ answer }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AnswerCardCapsule>
    )
}

