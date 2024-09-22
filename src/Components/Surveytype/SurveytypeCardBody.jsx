import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SurveytypeCardBody = ({ surveytype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ surveytype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ surveytype?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ surveytype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ surveytype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

