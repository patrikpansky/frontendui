import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcprogramCardBody = ({ acprogram, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acprogram?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acprogram?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acprogram?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acprogram?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acprogram?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

