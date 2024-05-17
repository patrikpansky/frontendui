import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Col, Row } from 'react-bootstrap'
import { FormLink } from './FormLink'
import { RequestLink } from '../Request/RequestLink'


export const FormMediumCard = ({form, children}) => {
    return (
        <CardCapsule  title={<>Formulář <FormLink form={form} /></>}>
            {(form?.request)?
                <Row>
                <Col>
                    Patří k požadavku
                </Col>
                <Col>
                    <RequestLink request={form?.request} />
                </Col>
                </Row>: ""
            }
            
            <Row>
                <Col>
                    Vytvořeno
                </Col>
                <Col>
                    {form?.created}
                </Col>
            </Row>
            <Row>
                <Col>
                    Vytvořil
                </Col>
                <Col>
                    {form?.createby?.fullname}
                </Col>
            </Row>
            <Row>
                <Col>
                    Změněno
                </Col>
                <Col>
                    {form?.lastchange}
                </Col>
            </Row>
            <Row>
                <Col>
                    Změnil
                </Col>
                <Col>
                    {form?.changedby?.fullname}
                </Col>
            </Row>
        </CardCapsule>
    )
}
