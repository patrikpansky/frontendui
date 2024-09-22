import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RbacobjectCardBody = ({ rbacobject, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ rbacobject?.id }</Col>
            </Row>
            {children}
        </>
    )
}

