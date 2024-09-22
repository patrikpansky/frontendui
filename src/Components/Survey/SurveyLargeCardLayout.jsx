import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveyCardCapsule } from './SurveyCardCapsule';

export const SurveyLargeCardLayout = ({ survey, children, grandchildren}) => {
    // console.log("SurveyLargeCard", survey)
    return (
        <SurveyCardCapsule survey={ survey }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </SurveyCardCapsule>
    )
}

