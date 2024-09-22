import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationtypeCardCapsule } from './PublicationtypeCardCapsule';

export const PublicationtypeLargeCardLayout = ({ publicationtype, children, grandchildren}) => {
    // console.log("PublicationtypeLargeCard", publicationtype)
    return (
        <PublicationtypeCardCapsule publicationtype={ publicationtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PublicationtypeCardCapsule>
    )
}

