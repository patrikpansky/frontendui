import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RolecategoryCardCapsule } from './RolecategoryCardCapsule';

export const RolecategoryLargeCardLayout = ({ rolecategory, children, grandchildren}) => {
    // console.log("RolecategoryLargeCard", rolecategory)
    return (
        <RolecategoryCardCapsule rolecategory={ rolecategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </RolecategoryCardCapsule>
    )
}

