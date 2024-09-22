import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AcsemesterCardBody = ({ acsemester, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ acsemester?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ acsemester?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ acsemester?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>order</b></Col><Col>{ acsemester?.order }</Col>
            </Row>
            {children}
        </>
    )
}

