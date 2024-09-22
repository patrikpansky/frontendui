import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjecttypeMediumCard as MediumCard} from './ProjecttypeMediumCard';
import { ProjecttypeLoadMoreButton as LoadMoreButton} from './ProjecttypeLoadMoreButton';
/**
 * Entity representing a project types
 */
export const ProjecttypesCards = ({ projecttypes, children }) => {
    return (
        <>
        <Row>
        { projecttypes.map(
            projecttype => <Col xl={4} md={6} xs={12} key={ projecttype.id } ><MediumCard key={ projecttype.id } projecttype={ projecttype } /></Col>
            
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

