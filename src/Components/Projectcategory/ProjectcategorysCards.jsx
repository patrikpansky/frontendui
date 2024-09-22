import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectcategoryMediumCard as MediumCard} from './ProjectcategoryMediumCard';
import { ProjectcategoryLoadMoreButton as LoadMoreButton} from './ProjectcategoryLoadMoreButton';
/**
 * Entity representing a project category
 */
export const ProjectcategorysCards = ({ projectcategorys, children }) => {
    return (
        <>
        <Row>
        { projectcategorys.map(
            projectcategory => <Col xl={4} md={6} xs={12} key={ projectcategory.id } ><MediumCard key={ projectcategory.id } projectcategory={ projectcategory } /></Col>
            
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

