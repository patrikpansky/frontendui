import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const RawCard = ({survey}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={survey} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const SurveyLargeCard = ({survey, children}) => {
    return (
        <CardCapsule  title={<>Anketa {survey?.name }</>}>
        <Row>
            <Col md={3}>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <RawCard survey={survey}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
