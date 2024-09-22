import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SurveyCardBody = ({ survey, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ survey?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ survey?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ survey?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ survey?.created }</Col>
            </Row>
            {children}
        </>
    )
}

