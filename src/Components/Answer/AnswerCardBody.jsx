import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AnswerCardBody = ({ answer, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ answer?.id }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ answer?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ answer?.created }</Col>
            </Row>
            <Row>
                <Col><b>value</b></Col><Col>{ answer?.value }</Col>
            </Row>
            <Row>
                <Col><b>aswered</b></Col><Col>{ answer?.aswered }</Col>
            </Row>
            <Row>
                <Col><b>expired</b></Col><Col>{ answer?.expired }</Col>
            </Row>
            {children}
        </>
    )
}

