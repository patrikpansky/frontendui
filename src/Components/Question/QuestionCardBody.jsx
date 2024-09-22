import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const QuestionCardBody = ({ question, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ question?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ question?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ question?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ question?.created }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ question?.order }</Col>
            </Row>
            {children}
        </>
    )
}

