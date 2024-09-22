import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormtypeMediumCard as MediumCard} from './FormtypeMediumCard';
import { FormtypeLoadMoreButton as LoadMoreButton} from './FormtypeLoadMoreButton';
/**
 * Entity representing a category of form types
 */
export const FormtypesCards = ({ formtypes, children }) => {
    return (
        <>
        <Row>
        { formtypes.map(
            formtype => <Col xl={4} md={6} xs={12} key={ formtype.id } ><MediumCard key={ formtype.id } formtype={ formtype } /></Col>
            
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

