import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramstudentCardBody = ({ acprogramstudent, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramstudent?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramstudent?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramstudent?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>semester</b></Col><Col>{ acprogramstudent?.semester }</Col>
            </Row>
            {children}
        </>
    )
}

