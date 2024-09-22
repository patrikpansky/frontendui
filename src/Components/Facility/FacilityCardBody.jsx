import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FacilityCardBody = ({ facility, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ facility?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ facility?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ facility?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ facility?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ facility?.created }</Col>
            </Row>
            <Row>
                <Col><b>label</b></Col><Col>{ facility?.label }</Col>
            </Row>
            <Row>
                <Col><b>address</b></Col><Col>{ facility?.address }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ facility?.valid }</Col>
            </Row>
            <Row>
                <Col><b>capacity</b></Col><Col>{ facility?.capacity }</Col>
            </Row>
            <Row>
                <Col><b>geometry</b></Col><Col>{ facility?.geometry }</Col>
            </Row>
            <Row>
                <Col><b>geolocation</b></Col><Col>{ facility?.geolocation }</Col>
            </Row>
            {children}
        </>
    )
}

