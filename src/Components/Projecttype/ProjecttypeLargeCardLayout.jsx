import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjecttypeCardCapsule } from './ProjecttypeCardCapsule';

export const ProjecttypeLargeCardLayout = ({ projecttype, children, grandchildren}) => {
    // console.log("ProjecttypeLargeCard", projecttype)
    return (
        <ProjecttypeCardCapsule projecttype={ projecttype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ProjecttypeCardCapsule>
    )
}

