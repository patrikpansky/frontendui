import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectcategoryCardCapsule } from './ProjectcategoryCardCapsule';

export const ProjectcategoryLargeCardLayout = ({ projectcategory, children, grandchildren}) => {
    // console.log("ProjectcategoryLargeCard", projectcategory)
    return (
        <ProjectcategoryCardCapsule projectcategory={ projectcategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ProjectcategoryCardCapsule>
    )
}

