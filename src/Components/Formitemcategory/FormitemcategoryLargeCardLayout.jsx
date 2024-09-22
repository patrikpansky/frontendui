import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormitemcategoryCardCapsule } from './FormitemcategoryCardCapsule';

export const FormitemcategoryLargeCardLayout = ({ formitemcategory, children, grandchildren}) => {
    // console.log("FormitemcategoryLargeCard", formitemcategory)
    return (
        <FormitemcategoryCardCapsule formitemcategory={ formitemcategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormitemcategoryCardCapsule>
    )
}

