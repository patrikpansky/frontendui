import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GrouptypeCardCapsule } from './GrouptypeCardCapsule';

export const GrouptypeLargeCardLayout = ({ grouptype, children, grandchildren}) => {
    // console.log("GrouptypeLargeCard", grouptype)
    return (
        <GrouptypeCardCapsule grouptype={ grouptype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </GrouptypeCardCapsule>
    )
}

