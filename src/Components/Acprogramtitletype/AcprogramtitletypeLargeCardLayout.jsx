import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtitletypeCardCapsule } from './AcprogramtitletypeCardCapsule';

export const AcprogramtitletypeLargeCardLayout = ({ acprogramtitletype, children, grandchildren}) => {
    // console.log("AcprogramtitletypeLargeCard", acprogramtitletype)
    return (
        <AcprogramtitletypeCardCapsule acprogramtitletype={ acprogramtitletype }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </AcprogramtitletypeCardCapsule>
    )
}

