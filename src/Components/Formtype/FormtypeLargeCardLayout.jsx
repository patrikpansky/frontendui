import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormtypeCardCapsule } from './FormtypeCardCapsule';

export const FormtypeLargeCardLayout = ({ formtype, children, grandchildren}) => {
    // console.log("FormtypeLargeCard", formtype)
    return (
        <FormtypeCardCapsule formtype={ formtype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormtypeCardCapsule>
    )
}

