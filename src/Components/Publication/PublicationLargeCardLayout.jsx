import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationCardCapsule } from './PublicationCardCapsule';

export const PublicationLargeCardLayout = ({ publication, children, grandchildren}) => {
    // console.log("PublicationLargeCard", publication)
    return (
        <PublicationCardCapsule publication={ publication }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PublicationCardCapsule>
    )
}

