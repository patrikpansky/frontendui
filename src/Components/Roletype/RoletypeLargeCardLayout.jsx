import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypeCardCapsule } from './RoletypeCardCapsule';

export const RoletypeLargeCardLayout = ({ roletype, children, grandchildren}) => {
    // console.log("RoletypeLargeCard", roletype)
    return (
        <RoletypeCardCapsule roletype={ roletype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RoletypeCardCapsule>
    )
}

