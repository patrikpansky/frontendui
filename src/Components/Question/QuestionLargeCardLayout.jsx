import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestionCardCapsule } from './QuestionCardCapsule';

export const QuestionLargeCardLayout = ({ question, children, grandchildren}) => {
    // console.log("QuestionLargeCard", question)
    return (
        <QuestionCardCapsule question={ question }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </QuestionCardCapsule>
    )
}

