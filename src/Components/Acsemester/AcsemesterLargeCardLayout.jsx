import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsemesterCardCapsule } from './AcsemesterCardCapsule';

export const AcsemesterLargeCardLayout = ({ acsemester, children, grandchildren}) => {
    // console.log("AcsemesterLargeCard", acsemester)
    return (
        <AcsemesterCardCapsule acsemester={ acsemester }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcsemesterCardCapsule>
    )
}

