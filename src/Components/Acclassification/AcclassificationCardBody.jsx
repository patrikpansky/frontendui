import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcclassificationCardBody = ({ acclassification, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acclassification?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acclassification?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acclassification?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>date</b></Col><Col>{ acclassification?.date }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ acclassification?.order }</Col>
            </Row>
            {children}
        </>
    )
}

