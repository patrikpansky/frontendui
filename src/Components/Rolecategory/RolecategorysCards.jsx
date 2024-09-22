import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RolecategoryMediumCard as MediumCard} from './RolecategoryMediumCard';
import { RolecategoryLoadMoreButton as LoadMoreButton} from './RolecategoryLoadMoreButton';
/**
 * Entity representing a role type (like Dean)
 */
export const RolecategorysCards = ({ rolecategorys, children }) => {
    return (
        <>
        <Row>
        { rolecategorys.map(
            rolecategory => <Col xl={4} md={6} xs={12} key={ rolecategory.id } ><MediumCard key={ rolecategory.id } rolecategory={ rolecategory } /></Col>
            
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

