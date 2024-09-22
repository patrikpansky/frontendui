import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogrammessageCardBody = ({ acprogrammessage, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogrammessage?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogrammessage?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogrammessage?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogrammessage?.name }</Col>
            </Row>
            <Row>
                <Col><b>description</b></Col><Col>{ acprogrammessage?.description }</Col>
            </Row>
            <Row>
                <Col><b>date</b></Col><Col>{ acprogrammessage?.date }</Col>
            </Row>
            {children}
        </>
    )
}

