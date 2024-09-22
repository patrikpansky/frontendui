import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const EventCardBody = ({ event, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ event?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ event?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ event?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ event?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ event?.created }</Col>
            </Row>
            <Row>
                <Col><b>duration</b></Col><Col>{ event?.duration }</Col>
            </Row>
            <Row>
                <Col><b>description</b></Col><Col>{ event?.description }</Col>
            </Row>
            <Row>
                <Col><b>place</b></Col><Col>{ event?.place }</Col>
            </Row>
            <Row>
                <Col><b>placeid</b></Col><Col>{ event?.placeid }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ event?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ event?.enddate }</Col>
            </Row>
            {children}
        </>
    )
}

