import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProjecttypeCardBody = ({ projecttype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ projecttype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ projecttype?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ projecttype?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ projecttype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ projecttype?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ projecttype?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

