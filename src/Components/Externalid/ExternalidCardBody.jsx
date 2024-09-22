import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ExternalidCardBody = ({ externalid, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ externalid?.id }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ externalid?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ externalid?.created }</Col>
            </Row>
            <Row>
                <Col><b>innerid</b></Col><Col>{ externalid?.innerid }</Col>
            </Row>
            <Row>
                <Col><b>outerid</b></Col><Col>{ externalid?.outerid }</Col>
            </Row>
            <Row>
                <Col><b>typename</b></Col><Col>{ externalid?.typename }</Col>
            </Row>
            <Row>
                <Col><b>link</b></Col><Col>{ externalid?.link }</Col>
            </Row>
            {children}
        </>
    )
}

