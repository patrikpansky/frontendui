import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemMediumCard as MediumCard} from './FormitemMediumCard';
import { FormitemLoadMoreButton as LoadMoreButton} from './FormitemLoadMoreButton';
/**
 * Type representing an item in the form
 */
export const FormitemsCards = ({ formitems, children }) => {
    return (
        <>
        <Row>
        { formitems.map(
            formitem => <Col xl={4} md={6} xs={12} key={ formitem.id } ><MediumCard key={ formitem.id } formitem={ formitem } /></Col>
            
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

