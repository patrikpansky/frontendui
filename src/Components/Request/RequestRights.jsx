import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Col, Row } from 'react-bootstrap'

export const RequestRights = ({request}) => {
    return (
        <CardCapsule title={"Stav požadavku"}>
            <Row>
                <Col>
                    Stav
                </Col>
                <Col>
                    {request?.state?.name}
                </Col>
            </Row>
        </CardCapsule>
    )
}