import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemCardCapsule } from './FormitemCardCapsule';

export const FormitemLargeCardLayout = ({ formitem, children, grandchildren}) => {
    // console.log("FormitemLargeCard", formitem)
    return (
        <FormitemCardCapsule formitem={ formitem }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormitemCardCapsule>
    )
}

