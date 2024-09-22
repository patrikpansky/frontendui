import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramtypeCardBody = ({ acprogramtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramtype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

