import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemcategoryMediumCard as MediumCard} from './FormitemcategoryMediumCard';
import { FormitemcategoryLoadMoreButton as LoadMoreButton} from './FormitemcategoryLoadMoreButton';
/**
 * Type representing an item category
 */
export const FormitemcategorysCards = ({ formitemcategorys, children }) => {
    return (
        <>
        <Row>
        { formitemcategorys.map(
            formitemcategory => <Col xl={4} md={6} xs={12} key={ formitemcategory.id } ><MediumCard key={ formitemcategory.id } formitemcategory={ formitemcategory } /></Col>
            
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

