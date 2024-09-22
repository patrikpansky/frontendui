import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StatementofworkCardBody = ({ statementofwork, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ statementofwork?.id }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ statementofwork?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ statementofwork?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ statementofwork?.enddate }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ statementofwork?.created }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ statementofwork?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

