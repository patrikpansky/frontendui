import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidCardCapsule } from './ExternalidCardCapsule';

export const ExternalidLargeCardLayout = ({ externalid, children, grandchildren}) => {
    // console.log("ExternalidLargeCard", externalid)
    return (
        <ExternalidCardCapsule externalid={ externalid }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ExternalidCardCapsule>
    )
}

