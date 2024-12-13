import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const GroupMediumContent = ({group}) => {
    return (
        <>
        <Row>
            <Col>Název</Col>
            <Col>{group.name}</Col>
        </Row>
        {group?.type?.name &&
            <Row>
                <Col>Typ</Col>
                <Col>{group?.type?.name}</Col>
            </Row>
        }
        {group?.email && <Row>
            <Col>
                Email
            </Col>
            <Col>
                <a href={"mailto:" + group?.email}>{group?.email}</a>
            </Col>
        </Row>
        }
    </>
    )
}