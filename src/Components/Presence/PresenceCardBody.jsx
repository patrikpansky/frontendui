import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PresenceCardBody = ({ presence, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ presence?.id }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ presence?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ presence?.created }</Col>
            </Row>
            {children}
        </>
    )
}

