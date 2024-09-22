import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ActopicCardBody = ({ actopic, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ actopic?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ actopic?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ actopic?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ actopic?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ actopic?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ actopic?.order }</Col>
            </Row>
            {children}
        </>
    )
}

