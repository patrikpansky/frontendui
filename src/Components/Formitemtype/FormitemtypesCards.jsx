import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemtypeMediumCard as MediumCard} from './FormitemtypeMediumCard';
import { FormitemtypeLoadMoreButton as LoadMoreButton} from './FormitemtypeLoadMoreButton';
/**
 * Type representing an item type
 */
export const FormitemtypesCards = ({ formitemtypes, children }) => {
    return (
        <>
        <Row>
        { formitemtypes.map(
            formitemtype => <Col xl={4} md={6} xs={12} key={ formitemtype.id } ><MediumCard key={ formitemtype.id } formitemtype={ formitemtype } /></Col>
            
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

