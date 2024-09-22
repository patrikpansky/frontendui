import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FacilitytypeCardBody = ({ facilitytype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ facilitytype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ facilitytype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ facilitytype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ facilitytype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ facilitytype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

