import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const FinanceCardBody = ({ finance, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ finance?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ finance?.name }</Col>
            </Row>
            <Row>
                <Col><b>amount</b></Col><Col>{ finance?.amount }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ finance?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ finance?.created }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ finance?.valid }</Col>
            </Row>
            {children}
        </>
    )
}

