import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupcategoryMediumCard as MediumCard} from './GroupcategoryMediumCard';
import { GroupcategoryLoadMoreButton as LoadMoreButton} from './GroupcategoryLoadMoreButton';
/**
 * Entity representing a group category (like Academic structures)
 */
export const GroupcategorysCards = ({ groupcategorys, children }) => {
    return (
        <>
        <Row>
        { groupcategorys.map(
            groupcategory => <Col xl={4} md={6} xs={12} key={ groupcategory.id } ><MediumCard key={ groupcategory.id } groupcategory={ groupcategory } /></Col>
            
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

