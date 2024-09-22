import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const RequesthistoryCardBody = ({ requesthistory, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ requesthistory?.id }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ requesthistory?.name }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ requesthistory?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ requesthistory?.created }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ requesthistory?.nameen }</Col>
            </Row>
            {children}
        </>
    )
}

