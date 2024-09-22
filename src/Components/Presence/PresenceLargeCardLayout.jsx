import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresenceCardCapsule } from './PresenceCardCapsule';

export const PresenceLargeCardLayout = ({ presence, children, grandchildren}) => {
    // console.log("PresenceLargeCard", presence)
    return (
        <PresenceCardCapsule presence={ presence }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PresenceCardCapsule>
    )
}

