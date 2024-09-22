import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancecategoryCardCapsule } from './FinancecategoryCardCapsule';

export const FinancecategoryLargeCardLayout = ({ financecategory, children, grandchildren}) => {
    // console.log("FinancecategoryLargeCard", financecategory)
    return (
        <FinancecategoryCardCapsule financecategory={ financecategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FinancecategoryCardCapsule>
    )
}

