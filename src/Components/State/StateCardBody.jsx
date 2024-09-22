import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StateCardBody = ({ state, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ state?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ state?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ state?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ state?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ state?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ state?.order }</Col>
            </Row>
            {children}
        </>
    )
}

