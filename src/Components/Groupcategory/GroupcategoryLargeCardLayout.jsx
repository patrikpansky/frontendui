import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupcategoryCardCapsule } from './GroupcategoryCardCapsule';

export const GroupcategoryLargeCardLayout = ({ groupcategory, children, grandchildren}) => {
    // console.log("GroupcategoryLargeCard", groupcategory)
    return (
        <GroupcategoryCardCapsule groupcategory={ groupcategory }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </GroupcategoryCardCapsule>
    )
}

