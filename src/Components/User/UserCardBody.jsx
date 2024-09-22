import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const UserCardBody = ({ user, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ user?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ user?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ user?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ user?.name }</Col>
            </Row>
            <Row>
                <Col><b>firstname</b></Col><Col>{ user?.firstname }</Col>
            </Row>
            <Row>
                <Col><b>surname</b></Col><Col>{ user?.surname }</Col>
            </Row>
            <Row>
                <Col><b>fullname</b></Col><Col>{ user?.fullname }</Col>
            </Row>
            <Row>
                <Col><b>email</b></Col><Col>{ user?.email }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ user?.valid }</Col>
            </Row>
            <Row>
                <Col><b>isthisme</b></Col><Col>{ user?.isthisme }</Col>
            </Row>
            <Row>
                <Col><b>gdpr</b></Col><Col>{ user?.gdpr }</Col>
            </Row>
            {children}
        </>
    )
}

