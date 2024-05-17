import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { SubjectMediumCard } from './SubjectMediumCard';
import { SemesterLink } from './SemesterLink';
import { ProgramLink } from './ProgramLink';
import { SubjectLink } from './SubjectLink';

const RawCard = ({semester}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={semester} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const SemesterMediumCard = ({semester, children}) => {
    return (
        <CardCapsule  title={<>Semestr <SemesterLink semester={semester} /></>}>
            <Row>
                <Col >
                    Program
                </Col>           
                <Col >
                    <ProgramLink program={semester?.subject?.program} />
                </Col>           
            </Row>
            <Row>
                <Col >
                    Předmět
                </Col>           
                <Col >
                    <SubjectLink subject={semester?.subject} />
                </Col>           
            </Row>
            <Row>
                <Col >
                    Pořadí
                </Col>           
                <Col >
                    {semester?.order}
                </Col>           
            </Row>
        </CardCapsule>


    )
}
