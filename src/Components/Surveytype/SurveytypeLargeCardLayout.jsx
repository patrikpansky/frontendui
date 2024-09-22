import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveytypeCardCapsule } from './SurveytypeCardCapsule';

export const SurveytypeLargeCardLayout = ({ surveytype, children, grandchildren}) => {
    // console.log("SurveytypeLargeCard", surveytype)
    return (
        <SurveytypeCardCapsule surveytype={ surveytype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </SurveytypeCardCapsule>
    )
}

