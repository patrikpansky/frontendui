import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const GroupconnectionedgeCardBody = ({ groupconnectionedge, children }) => {
    return (
        <>
            <Row>
                <Col><b>cursor</b></Col><Col>{ groupconnectionedge?.cursor }</Col>
            </Row>
            {children}
        </>
    )
}

