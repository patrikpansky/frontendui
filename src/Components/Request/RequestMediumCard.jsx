import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Col, Row } from 'react-bootstrap'


export const RequestMediumCard = ({request, children}) => {
    const datelastchange = new Date(request?.lastchange)
    const datecreated = new Date(request?.created)
    return (
        <CardCapsule  title={<>Požadavek {request?.name }</>}>
            <Row>
                <Col>
                    Vytvořeno
                </Col>
                <Col>
                    {/* {request?.created} */}
                    {datecreated?.toLocaleDateString()}, {datecreated?.toLocaleTimeString()}
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
                    {datelastchange?.toLocaleDateString()}, {datelastchange?.toLocaleTimeString()}
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
