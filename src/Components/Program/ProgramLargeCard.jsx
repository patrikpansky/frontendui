import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { ProgramMediumCard } from './ProgramMediumCard';
import { ProgramLink } from './ProgramLink';

const RawCard = ({program}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={program} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const ProgramLargeCard = ({program, children}) => {
    return (
        <CardCapsule  title={<>Program <ProgramLink program={program} /></>}>
        <Row>
            <Col md={3}>
                <ProgramMediumCard program={program} />
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
                <RawCard program={program}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
