import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProjectCardBody = ({ project, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ project?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ project?.name }</Col>
            </Row>
            <Row>
                <Col><b>startdate</b></Col><Col>{ project?.startdate }</Col>
            </Row>
            <Row>
                <Col><b>enddate</b></Col><Col>{ project?.enddate }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ project?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ project?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ project?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

