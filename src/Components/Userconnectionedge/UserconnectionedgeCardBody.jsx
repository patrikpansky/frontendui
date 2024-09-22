import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const UserconnectionedgeCardBody = ({ userconnectionedge, children }) => {
    return (
        <>
            <Row>
                <Col><b>cursor</b></Col><Col>{ userconnectionedge?.cursor }</Col>
            </Row>
            {children}
        </>
    )
}

