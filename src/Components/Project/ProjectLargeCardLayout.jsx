import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectCardCapsule } from './ProjectCardCapsule';

export const ProjectLargeCardLayout = ({ project, children, grandchildren}) => {
    // console.log("ProjectLargeCard", project)
    return (
        <ProjectCardCapsule project={ project }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ProjectCardCapsule>
    )
}

