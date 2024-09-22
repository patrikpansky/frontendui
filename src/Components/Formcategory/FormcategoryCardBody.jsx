import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FormcategoryCardBody = ({ formcategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ formcategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ formcategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ formcategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ formcategory?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ formcategory?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

