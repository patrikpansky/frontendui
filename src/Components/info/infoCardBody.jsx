import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const infoCardBody = ({ pageinfo, children }) => {
    return (
        <>
            <Row>
                <Col><b>after</b></Col><Col>{ pageinfo?.after }</Col>
            </Row>
            <Row>
                <Col><b>before</b></Col><Col>{ pageinfo?.before }</Col>
            </Row>
            <Row>
                <Col><b>first</b></Col><Col>{ pageinfo?.first }</Col>
            </Row>
            <Row>
                <Col><b>last</b></Col><Col>{ pageinfo?.last }</Col>
            </Row>
            <Row>
                <Col><b>hasnextpage</b></Col><Col>{ pageinfo?.hasnextpage }</Col>
            </Row>
            {children}
        </>
    )
}

