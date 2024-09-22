import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StatetransitionCardBody = ({ statetransition, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ statetransition?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ statetransition?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ statetransition?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ statetransition?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ statetransition?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

