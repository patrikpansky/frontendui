import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StatemachineCardBody = ({ statemachine, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ statemachine?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ statemachine?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ statemachine?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ statemachine?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ statemachine?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

