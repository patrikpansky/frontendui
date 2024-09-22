import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FinancetypeCardBody = ({ financetype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ financetype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ financetype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ financetype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ financetype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ financetype?.created }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ financetype?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

