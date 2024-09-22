import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const GroupcategoryCardBody = ({ groupcategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ groupcategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ groupcategory?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ groupcategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ groupcategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ groupcategory?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

