import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidcategoryCardCapsule } from './ExternalidcategoryCardCapsule';

export const ExternalidcategoryLargeCardLayout = ({ externalidcategory, children, grandchildren}) => {
    // console.log("ExternalidcategoryLargeCard", externalidcategory)
    return (
        <ExternalidcategoryCardCapsule externalidcategory={ externalidcategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </ExternalidcategoryCardCapsule>
    )
}

