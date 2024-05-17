import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { FormMediumCard } from './FormMediumCard';
import { FormLink } from './FormLink';

const RawCard = ({form}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={form} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const FormLargeCard = ({form, children}) => {
    return (
        <CardCapsule  title={<>Formulář <FormLink form={form} /></>}>
            <Row>
                <Col md={3}>
                    <FormMediumCard form={form} />
                </Col>
                <Col md={9}>
                    {children}
                </Col>               
            </Row>
            <br />
            <Row>
                <Col>
                    <RawCard form={form}/>
                </Col>
            </Row>
        </CardCapsule>

    )
}
