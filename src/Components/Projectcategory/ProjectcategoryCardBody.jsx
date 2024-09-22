import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ProjectcategoryCardBody = ({ projectcategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ projectcategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ projectcategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ projectcategory?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ projectcategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ projectcategory?.created }</Col>
            </Row>
            {children}
        </>
    )
}

