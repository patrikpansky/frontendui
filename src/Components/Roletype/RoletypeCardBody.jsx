import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RoletypeCardBody = ({ roletype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ roletype?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ roletype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ roletype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ roletype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ roletype?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

