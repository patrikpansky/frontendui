import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ExternalidtypeCardBody = ({ externalidtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ externalidtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ externalidtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ externalidtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ externalidtype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ externalidtype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

