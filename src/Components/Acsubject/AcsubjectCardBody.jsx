import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcsubjectCardBody = ({ acsubject, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acsubject?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acsubject?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acsubject?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acsubject?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acsubject?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

