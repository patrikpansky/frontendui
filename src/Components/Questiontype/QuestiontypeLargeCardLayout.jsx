import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestiontypeCardCapsule } from './QuestiontypeCardCapsule';

export const QuestiontypeLargeCardLayout = ({ questiontype, children, grandchildren}) => {
    // console.log("QuestiontypeLargeCard", questiontype)
    return (
        <QuestiontypeCardCapsule questiontype={ questiontype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </QuestiontypeCardCapsule>
    )
}

