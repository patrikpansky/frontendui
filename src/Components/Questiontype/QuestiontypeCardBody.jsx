import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const QuestiontypeCardBody = ({ questiontype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ questiontype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ questiontype?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ questiontype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ questiontype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

