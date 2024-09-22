import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestiontypeMediumCard as MediumCard} from './QuestiontypeMediumCard';
import { QuestiontypeLoadMoreButton as LoadMoreButton} from './QuestiontypeLoadMoreButton';
/**
 * Entity representing a relation between an user and a group
 */
export const QuestiontypesCards = ({ questiontypes, children }) => {
    return (
        <>
        <Row>
        { questiontypes.map(
            questiontype => <Col xl={4} md={6} xs={12} key={ questiontype.id } ><MediumCard key={ questiontype.id } questiontype={ questiontype } /></Col>
            
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

