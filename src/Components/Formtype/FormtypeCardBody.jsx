import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormtypeCardBody = ({ formtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formtype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formtype?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

