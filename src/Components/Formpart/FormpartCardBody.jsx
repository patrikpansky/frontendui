import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormpartCardBody = ({ formpart, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formpart?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formpart?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formpart?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formpart?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formpart?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ formpart?.order }</Col>
            </Row>
            {children}
        </>
    )
}

