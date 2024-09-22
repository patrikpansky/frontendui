import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramformtypeCardBody = ({ acprogramformtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramformtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramformtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramformtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramformtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramformtype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

