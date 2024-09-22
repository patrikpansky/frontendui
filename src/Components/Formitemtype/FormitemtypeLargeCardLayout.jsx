import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemtypeCardCapsule } from './FormitemtypeCardCapsule';

export const FormitemtypeLargeCardLayout = ({ formitemtype, children, grandchildren}) => {
    // console.log("FormitemtypeLargeCard", formitemtype)
    return (
        <FormitemtypeCardCapsule formitemtype={ formitemtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormitemtypeCardCapsule>
    )
}

