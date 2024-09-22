import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormcategoryCardCapsule } from './FormcategoryCardCapsule';

export const FormcategoryLargeCardLayout = ({ formcategory, children, grandchildren}) => {
    // console.log("FormcategoryLargeCard", formcategory)
    return (
        <FormcategoryCardCapsule formcategory={ formcategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FormcategoryCardCapsule>
    )
}

