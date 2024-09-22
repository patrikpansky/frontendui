import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PlanCardBody = ({ plan, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ plan?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ plan?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ plan?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ plan?.created }</Col>
            </Row>
            {children}
        </>
    )
}

