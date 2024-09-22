import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FinancecategoryCardBody = ({ financecategory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ financecategory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ financecategory?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ financecategory?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ financecategory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ financecategory?.created }</Col>
            </Row>
            {children}
        </>
    )
}

