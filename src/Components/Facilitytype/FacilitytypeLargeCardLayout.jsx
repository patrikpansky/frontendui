import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilitytypeCardCapsule } from './FacilitytypeCardCapsule';

export const FacilitytypeLargeCardLayout = ({ facilitytype, children, grandchildren}) => {
    // console.log("FacilitytypeLargeCard", facilitytype)
    return (
        <FacilitytypeCardCapsule facilitytype={ facilitytype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FacilitytypeCardCapsule>
    )
}

