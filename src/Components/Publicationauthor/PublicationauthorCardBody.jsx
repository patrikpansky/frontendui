import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const PublicationauthorCardBody = ({ publicationauthor, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ publicationauthor?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ publicationauthor?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ publicationauthor?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ publicationauthor?.order }</Col>
            </Row>
            <Row>
                <Col><b>share</b></Col><Col>{ publicationauthor?.share }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ publicationauthor?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

