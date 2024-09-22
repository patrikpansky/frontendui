import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupCardCapsule } from './GroupCardCapsule';

export const GroupLargeCardLayout = ({ group, children, grandchildren}) => {
    // console.log("GroupLargeCard", group)
    return (
        <GroupCardCapsule group={ group }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </GroupCardCapsule>
    )
}

