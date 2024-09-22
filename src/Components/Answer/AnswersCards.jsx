import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AnswerMediumCard as MediumCard} from './AnswerMediumCard';
import { AnswerLoadMoreButton as LoadMoreButton} from './AnswerLoadMoreButton';
/**
 * Entity representing an access to information
 */
export const AnswersCards = ({ answers, children }) => {
    return (
        <>
        <Row>
        { answers.map(
            answer => <Col xl={4} md={6} xs={12} key={ answer.id } ><MediumCard key={ answer.id } answer={ answer } /></Col>
            
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

