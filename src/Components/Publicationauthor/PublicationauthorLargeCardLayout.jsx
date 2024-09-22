import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationauthorCardCapsule } from './PublicationauthorCardCapsule';

export const PublicationauthorLargeCardLayout = ({ publicationauthor, children, grandchildren}) => {
    // console.log("PublicationauthorLargeCard", publicationauthor)
    return (
        <PublicationauthorCardCapsule publicationauthor={ publicationauthor }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PublicationauthorCardCapsule>
    )
}

