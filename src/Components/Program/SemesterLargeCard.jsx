import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { SemesterMediumCard } from './SemesterMediumCard';
import { SemesterLink } from './SemesterLink';

const RawCard = ({semester}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={semester} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const SemesterLargeCard = ({semester, children}) => {
    return (
        <CardCapsule  title={<>Semestr <SemesterLink semester={semester} /></>}>
        <Row>
            <Col md={3}>
                <SemesterMediumCard semester={semester} />
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
                <RawCard semester={semester}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
