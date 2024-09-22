import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RoletypelistCardBody = ({ roletypelist, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ roletypelist?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ roletypelist?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ roletypelist?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

