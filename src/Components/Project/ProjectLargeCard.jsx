import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { ProjectMediumCard } from './ProjectMediumCard';

const RawCard = ({project}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={project} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const ProjectLargeCard = ({project, children}) => {
    return (
        <CardCapsule  title={<>Projekt {project?.name }</>}>
        <Row>
            <Col md={3}>
                <ProjectMediumCard project={project} />
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <RawCard project={project}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
