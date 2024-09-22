import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RolecategoryCardBody = ({ rolecategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ rolecategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ rolecategory?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ rolecategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ rolecategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ rolecategory?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

