import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresencetypeCardCapsule } from './PresencetypeCardCapsule';

export const PresencetypeLargeCardLayout = ({ presencetype, children, grandchildren}) => {
    // console.log("PresencetypeLargeCard", presencetype)
    return (
        <PresencetypeCardCapsule presencetype={ presencetype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </PresencetypeCardCapsule>
    )
}

