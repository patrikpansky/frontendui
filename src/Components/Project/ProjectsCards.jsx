import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectMediumCard as MediumCard} from './ProjectMediumCard';
import { ProjectLoadMoreButton as LoadMoreButton} from './ProjectLoadMoreButton';
/**
 * Entity representing a project
 */
export const ProjectsCards = ({ projects, children }) => {
    return (
        <>
        <Row>
        { projects.map(
            project => <Col xl={4} md={6} xs={12} key={ project.id } ><MediumCard key={ project.id } project={ project } /></Col>
            
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

