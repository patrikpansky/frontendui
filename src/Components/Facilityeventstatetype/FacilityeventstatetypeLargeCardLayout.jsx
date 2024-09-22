import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityeventstatetypeCardCapsule } from './FacilityeventstatetypeCardCapsule';

export const FacilityeventstatetypeLargeCardLayout = ({ facilityeventstatetype, children, grandchildren}) => {
    // console.log("FacilityeventstatetypeLargeCard", facilityeventstatetype)
    return (
        <FacilityeventstatetypeCardCapsule facilityeventstatetype={ facilityeventstatetype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FacilityeventstatetypeCardCapsule>
    )
}

