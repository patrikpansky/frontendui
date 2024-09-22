import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancetypeCardCapsule } from './FinancetypeCardCapsule';

export const FinancetypeLargeCardLayout = ({ financetype, children, grandchildren}) => {
    // console.log("FinancetypeLargeCard", financetype)
    return (
        <FinancetypeCardCapsule financetype={ financetype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </FinancetypeCardCapsule>
    )
}

