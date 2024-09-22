import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramleveltypeCardBody = ({ acprogramleveltype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramleveltype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramleveltype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramleveltype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramleveltype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramleveltype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

