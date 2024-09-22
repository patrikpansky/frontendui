import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityCardCapsule } from './FacilityCardCapsule';

export const FacilityLargeCardLayout = ({ facility, children, grandchildren}) => {
    // console.log("FacilityLargeCard", facility)
    return (
        <FacilityCardCapsule facility={ facility }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FacilityCardCapsule>
    )
}

