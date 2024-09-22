import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveytypeMediumCard as MediumCard} from './SurveytypeMediumCard';
import { SurveytypeLoadMoreButton as LoadMoreButton} from './SurveytypeLoadMoreButton';
/**
 * Entity representing a relation between an user and a group
 */
export const SurveytypesCards = ({ surveytypes, children }) => {
    return (
        <>
        <Row>
        { surveytypes.map(
            surveytype => <Col xl={4} md={6} xs={12} key={ surveytype.id } ><MediumCard key={ surveytype.id } surveytype={ surveytype } /></Col>
            
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

