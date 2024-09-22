import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormCardBody = ({ form, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ form?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ form?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ form?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ form?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ form?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ form?.valid }</Col>
            </Row>
            <Row>
                <Col><b>status</b></Col><Col>{ form?.status }</Col>
            </Row>
            {children}
        </>
    )
}

