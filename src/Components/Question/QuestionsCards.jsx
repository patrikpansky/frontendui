import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestionMediumCard as MediumCard} from './QuestionMediumCard';
import { QuestionLoadMoreButton as LoadMoreButton} from './QuestionLoadMoreButton';
/**
 * Entity representing an access to information
 */
export const QuestionsCards = ({ questions, children }) => {
    return (
        <>
        <Row>
        { questions.map(
            question => <Col xl={4} md={6} xs={12} key={ question.id } ><MediumCard key={ question.id } question={ question } /></Col>
            
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

