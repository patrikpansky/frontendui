import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const MembershipCardBody = ({ membership, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ membership?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ membership?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ membership?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ membership?.valid }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ membership?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ membership?.enddate }</Col>
            </Row>
            {children}
        </>
    )
}

