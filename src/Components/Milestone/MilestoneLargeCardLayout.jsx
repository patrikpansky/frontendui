import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MilestoneCardCapsule } from './MilestoneCardCapsule';

export const MilestoneLargeCardLayout = ({ milestone, children, grandchildren}) => {
    // console.log("MilestoneLargeCard", milestone)
    return (
        <MilestoneCardCapsule milestone={ milestone }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </MilestoneCardCapsule>
    )
}

