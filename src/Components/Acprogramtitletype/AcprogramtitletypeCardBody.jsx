import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramtitletypeCardBody = ({ acprogramtitletype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogramtitletype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogramtitletype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogramtitletype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogramtitletype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogramtitletype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

