import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const InvitationtypeCardBody = ({ invitationtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ invitationtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ invitationtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ invitationtype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ invitationtype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ invitationtype?.created }</Col>
            </Row>
            {children}
        </>
    )
}

