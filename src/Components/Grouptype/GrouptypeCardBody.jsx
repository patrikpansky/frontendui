import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const GrouptypeCardBody = ({ grouptype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ grouptype?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ grouptype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ grouptype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ grouptype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ grouptype?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

