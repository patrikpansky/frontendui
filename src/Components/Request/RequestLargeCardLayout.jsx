import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RequestCardCapsule } from './RequestCardCapsule';

export const RequestLargeCardLayout = ({ request, children, grandchildren}) => {
    // console.log("RequestLargeCard", request)
    return (
        <RequestCardCapsule request={ request }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RequestCardCapsule>
    )
}

