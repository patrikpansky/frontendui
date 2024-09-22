import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FacilityeventstatetypeCardBody = ({ facilityeventstatetype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ facilityeventstatetype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ facilityeventstatetype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ facilityeventstatetype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ facilityeventstatetype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ facilityeventstatetype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

