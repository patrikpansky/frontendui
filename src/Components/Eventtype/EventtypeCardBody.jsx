import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const EventtypeCardBody = ({ eventtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ eventtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ eventtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ eventtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ eventtype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ eventtype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

