import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PublicationCardBody = ({ publication, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ publication?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ publication?.name }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ publication?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ publication?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>publisheddate</b></Col><Col>{ publication?.publisheddate }</Col>
            </Row>
            <Row>
                <Col><b>place</b></Col><Col>{ publication?.place }</Col>
            </Row>
            <Row>
                <Col><b>reference</b></Col><Col>{ publication?.reference }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ publication?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

