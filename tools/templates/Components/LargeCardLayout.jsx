import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { {{Name name}}CardCapsule } from './{{Name name}}CardCapsule';

export const {{Name name}}LargeCardLayout = ({ {{name name}}, children, grandchildren}) => {
    // console.log("{{Name name}}LargeCard", {{name name}})
    return (
        <{{Name name}}CardCapsule {{name name}}={ {{name name}} }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </{{Name name}}CardCapsule>
    )
}

