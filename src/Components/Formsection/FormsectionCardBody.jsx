import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormsectionCardBody = ({ formsection, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formsection?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formsection?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formsection?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formsection?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formsection?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ formsection?.order }</Col>
            </Row>
            {children}
        </>
    )
}

