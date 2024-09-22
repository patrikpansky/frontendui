import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormitemtypeCardBody = ({ formitemtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formitemtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formitemtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formitemtype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formitemtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formitemtype?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

