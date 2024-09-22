import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RoleCardBody = ({ role, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ role?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ role?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ role?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ role?.valid }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ role?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ role?.enddate }</Col>
            </Row>
            {children}
        </>
    )
}

