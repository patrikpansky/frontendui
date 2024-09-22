import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AclessonCardBody = ({ aclesson, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ aclesson?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ aclesson?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ aclesson?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ aclesson?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ aclesson?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>count</b></Col><Col>{ aclesson?.count }</Col>
            </Row>
            {children}
        </>
    )
}

