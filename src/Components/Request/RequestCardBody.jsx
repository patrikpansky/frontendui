import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RequestCardBody = ({ request, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ request?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ request?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ request?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ request?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ request?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>gdpr</b></Col><Col>{ request?.gdpr }</Col>
            </Row>
            {children}
        </>
    )
}

