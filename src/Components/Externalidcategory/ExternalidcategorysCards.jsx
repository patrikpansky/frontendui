import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidcategoryMediumCard as MediumCard} from './ExternalidcategoryMediumCard';
import { ExternalidcategoryLoadMoreButton as LoadMoreButton} from './ExternalidcategoryLoadMoreButton';
/**
 * Entity representing an external category id ()
 */
export const ExternalidcategorysCards = ({ externalidcategorys, children }) => {
    return (
        <>
        <Row>
        { externalidcategorys.map(
            externalidcategory => <Col xl={4} md={6} xs={12} key={ externalidcategory.id } ><MediumCard key={ externalidcategory.id } externalidcategory={ externalidcategory } /></Col>
            
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

