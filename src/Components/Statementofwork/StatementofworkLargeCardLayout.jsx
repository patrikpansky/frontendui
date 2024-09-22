import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatementofworkCardCapsule } from './StatementofworkCardCapsule';

export const StatementofworkLargeCardLayout = ({ statementofwork, children, grandchildren}) => {
    // console.log("StatementofworkLargeCard", statementofwork)
    return (
        <StatementofworkCardCapsule statementofwork={ statementofwork }>
            <Row>
                <Col md={4}>
                    {children}
                </Col>
                <Col md={8}>
                    {grandchildren}
                </Col>
            </Row>
        </StatementofworkCardCapsule>
    )
}

