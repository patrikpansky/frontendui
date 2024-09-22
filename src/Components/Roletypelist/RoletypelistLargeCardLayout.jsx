import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypelistCardCapsule } from './RoletypelistCardCapsule';

export const RoletypelistLargeCardLayout = ({ roletypelist, children, grandchildren}) => {
    // console.log("RoletypelistLargeCard", roletypelist)
    return (
        <RoletypelistCardCapsule roletypelist={ roletypelist }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RoletypelistCardCapsule>
    )
}

