import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const GroupCardBody = ({ group, children }) => {
    return (
        <>
            <Row>
                <Col><b>id</b></Col><Col>{ group?.id }</Col>
            </Row>
            <Row>
                <Col><b>created</b></Col><Col>{ group?.created }</Col>
            </Row>
            <Row>
                <Col><b>lastchange</b></Col><Col>{ group?.lastchange }</Col>
            </Row>
            <Row>
                <Col><b>name</b></Col><Col>{ group?.name }</Col>
            </Row>
            <Row>
                <Col><b>nameen</b></Col><Col>{ group?.nameen }</Col>
            </Row>
            <Row>
                <Col><b>email</b></Col><Col>{ group?.email }</Col>
            </Row>
            <Row>
                <Col><b>abbreviation</b></Col><Col>{ group?.abbreviation }</Col>
            </Row>
            <Row>
                <Col><b>valid</b></Col><Col>{ group?.valid }</Col>
            </Row>
            <Row>
                <Col><b>typeid</b></Col><Col>{ group?.typeid }</Col>
            </Row>
            {children}
        </>
    )
}

