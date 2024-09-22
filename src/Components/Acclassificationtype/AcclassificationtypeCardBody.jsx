import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcclassificationtypeCardBody = ({ acclassificationtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acclassificationtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acclassificationtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acclassificationtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acclassificationtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acclassificationtype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

