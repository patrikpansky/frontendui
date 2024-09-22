import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveyMediumCard as MediumCard} from './SurveyMediumCard';
import { SurveyLoadMoreButton as LoadMoreButton} from './SurveyLoadMoreButton';
/**
 * Entity representing a relation between an user and a group
 */
export const SurveysCards = ({ surveys, children }) => {
    return (
        <>
        <Row>
        { surveys.map(
            survey => <Col xl={4} md={6} xs={12} key={ survey.id } ><MediumCard key={ survey.id } survey={ survey } /></Col>
            
        )}
        </Row>
        <Row>
            <Col xl={12} md={12} xs={12} >
                {children}
            </Col>
        </Row>
        </>
    )
}

