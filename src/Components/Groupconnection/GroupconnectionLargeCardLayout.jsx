import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupconnectionCardCapsule } from './GroupconnectionCardCapsule';

export const GroupconnectionLargeCardLayout = ({ groupconnection, children, grandchildren}) => {
    // console.log("GroupconnectionLargeCard", groupconnection)
    return (
        <GroupconnectionCardCapsule groupconnection={ groupconnection }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </GroupconnectionCardCapsule>
    )
}

