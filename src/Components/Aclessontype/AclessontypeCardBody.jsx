import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AclessontypeCardBody = ({ aclessontype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ aclessontype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ aclessontype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ aclessontype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ aclessontype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ aclessontype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

