import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestionvalueMediumCard as MediumCard} from './QuestionvalueMediumCard';
import { QuestionvalueLoadMoreButton as LoadMoreButton} from './QuestionvalueLoadMoreButton';
/**
 * Entity representing an access to information
 */
export const QuestionvaluesCards = ({ questionvalues, children }) => {
    return (
        <>
        <Row>
        { questionvalues.map(
            questionvalue => <Col xl={4} md={6} xs={12} key={ questionvalue.id } ><MediumCard key={ questionvalue.id } questionvalue={ questionvalue } /></Col>
            
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

