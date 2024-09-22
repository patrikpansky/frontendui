import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ExternalidcategoryCardBody = ({ externalidcategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ externalidcategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ externalidcategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ externalidcategory?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ externalidcategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ externalidcategory?.created }</Col>
            </Row>
            {children}
        </>
    )
}

