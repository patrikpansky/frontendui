import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidtypeCardCapsule } from './ExternalidtypeCardCapsule';

export const ExternalidtypeLargeCardLayout = ({ externalidtype, children, grandchildren}) => {
    // console.log("ExternalidtypeLargeCard", externalidtype)
    return (
        <ExternalidtypeCardCapsule externalidtype={ externalidtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ExternalidtypeCardCapsule>
    )
}

