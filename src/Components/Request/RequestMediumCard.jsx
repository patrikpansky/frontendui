import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Col, Row } from 'react-bootstrap'


export const RequestMediumCard = ({request, children}) => {
    return (
        <CardCapsule  title={<>Požadavek {request?.name }</>}>
            <Row>
                <Col>
                    Vytvořeno
                </Col>
                <Col>
                    {request?.created}
                </Col>
            </Row>
            <Row>
                <Col>
                    Vytvořil
                </Col>
                <Col>
                    {request?.createby?.fullname}
                </Col>
            </Row>
            <Row>
                <Col>
                    Změněno
                </Col>
                <Col>
                    {request?.lastchange}
                </Col>
            </Row>
            <Row>
                <Col>
                    Změnil
                </Col>
                <Col>
                    {request?.changedby?.fullname}
                </Col>
            </Row>
        </CardCapsule>
    )
}
