import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { infoCardCapsule } from './infoCardCapsule';

export const infoLargeCardLayout = ({ pageinfo, children, grandchildren}) => {
    // console.log("infoLargeCard", pageinfo)
    return (
        <infoCardCapsule pageinfo={ pageinfo }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </infoCardCapsule>
    )
}

