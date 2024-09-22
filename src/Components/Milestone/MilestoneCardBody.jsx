import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const MilestoneCardBody = ({ milestone, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ milestone?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ milestone?.name }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ milestone?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ milestone?.enddate }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ milestone?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ milestone?.created }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ milestone?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

