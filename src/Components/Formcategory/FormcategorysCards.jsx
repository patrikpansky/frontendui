import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormcategoryMediumCard as MediumCard} from './FormcategoryMediumCard';
import { FormcategoryLoadMoreButton as LoadMoreButton} from './FormcategoryLoadMoreButton';
/**
 * Entity representing a category of form types
 */
export const FormcategorysCards = ({ formcategorys, children }) => {
    return (
        <>
        <Row>
        { formcategorys.map(
            formcategory => <Col xl={4} md={6} xs={12} key={ formcategory.id } ><MediumCard key={ formcategory.id } formcategory={ formcategory } /></Col>
            
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

