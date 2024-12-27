import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const RequestTypeMediumContent = ({requesttype, children}) => <>
    <Row>
        <Col></Col>
        <Col>{requesttype?.name}</Col>
    </Row>
    {children}
</>