import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormitemcategoryCardBody = ({ formitemcategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formitemcategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formitemcategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formitemcategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formitemcategory?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formitemcategory?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

