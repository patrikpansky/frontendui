import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const QuestionvalueCardBody = ({ questionvalue, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ questionvalue?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ questionvalue?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ questionvalue?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ questionvalue?.created }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ questionvalue?.order }</Col>
            </Row>
            {children}
        </>
    )
}

