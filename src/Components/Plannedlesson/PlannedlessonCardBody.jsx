import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PlannedlessonCardBody = ({ plannedlesson, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ plannedlesson?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ plannedlesson?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ plannedlesson?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ plannedlesson?.created }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ plannedlesson?.order }</Col>
            </Row>
            <Row>
                <Col><b>length</b></Col><Col>{ plannedlesson?.length }</Col>
            </Row>
            {children}
        </>
    )
}

