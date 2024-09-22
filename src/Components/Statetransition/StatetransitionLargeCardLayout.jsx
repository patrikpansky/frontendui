import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatetransitionCardCapsule } from './StatetransitionCardCapsule';

export const StatetransitionLargeCardLayout = ({ statetransition, children, grandchildren}) => {
    // console.log("StatetransitionLargeCard", statetransition)
    return (
        <StatetransitionCardCapsule statetransition={ statetransition }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </StatetransitionCardCapsule>
    )
}

