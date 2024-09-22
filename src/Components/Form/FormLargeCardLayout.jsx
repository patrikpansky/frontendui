import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormCardCapsule } from './FormCardCapsule';

export const FormLargeCardLayout = ({ form, children, grandchildren}) => {
    // console.log("FormLargeCard", form)
    return (
        <FormCardCapsule form={ form }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormCardCapsule>
    )
}

