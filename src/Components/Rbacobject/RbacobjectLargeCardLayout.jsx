import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RbacobjectCardCapsule } from './RbacobjectCardCapsule';

export const RbacobjectLargeCardLayout = ({ rbacobject, children, grandchildren}) => {
    // console.log("RbacobjectLargeCard", rbacobject)
    return (
        <RbacobjectCardCapsule rbacobject={ rbacobject }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RbacobjectCardCapsule>
    )
}

