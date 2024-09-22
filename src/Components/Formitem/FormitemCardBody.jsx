import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormitemCardBody = ({ formitem, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formitem?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formitem?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formitem?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formitem?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formitem?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ formitem?.order }</Col>
            </Row>
            <Row>
                <Col><b>value</b></Col><Col>{ formitem?.value }</Col>
            </Row>
            {children}
        </>
    )
}

