import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PresencetypeCardBody = ({ presencetype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ presencetype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ presencetype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ presencetype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ presencetype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ presencetype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

