import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramstudentstateCardBody = ({ acprogramstudentstate, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramstudentstate?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramstudentstate?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramstudentstate?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramstudentstate?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramstudentstate?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

