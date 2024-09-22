import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PublicationtypeCardBody = ({ publicationtype, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ publicationtype?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ publicationtype?.name }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ publicationtype?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ publicationtype?.lastchange }</Col>
            </Row>
            {children}
        </>
    )
}

