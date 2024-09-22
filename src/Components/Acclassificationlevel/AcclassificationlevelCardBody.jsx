import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcclassificationlevelCardBody = ({ acclassificationlevel, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acclassificationlevel?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ acclassificationlevel?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ acclassificationlevel?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acclassificationlevel?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acclassificationlevel?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

