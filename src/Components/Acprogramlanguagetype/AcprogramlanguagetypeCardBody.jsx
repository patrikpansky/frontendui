import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramlanguagetypeCardBody = ({ acprogramlanguagetype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramlanguagetype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramlanguagetype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramlanguagetype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramlanguagetype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramlanguagetype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

