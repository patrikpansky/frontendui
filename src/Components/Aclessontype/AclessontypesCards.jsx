import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessontypeMediumCard as MediumCard} from './AclessontypeMediumCard';
import { AclessontypeLoadMoreButton as LoadMoreButton} from './AclessontypeLoadMoreButton';
/**
 * P, C, LC, S, ...
 */
export const AclessontypesCards = ({ aclessontypes, children }) => {
    return (
        <>
        <Row>
        { aclessontypes.map(
            aclessontype => <Col xl={4} md={6} xs={12} key={ aclessontype.id } ><MediumCard key={ aclessontype.id } aclessontype={ aclessontype } /></Col>
            
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

