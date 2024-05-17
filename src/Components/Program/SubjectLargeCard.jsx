import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { SubjectMediumCard } from './SubjectMediumCard';
import { SubjectLink } from './SubjectLink';

const RawCard = ({subject}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={subject} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const SubjectLargeCard = ({subject, children}) => {
    return (
        <CardCapsule  title={<>Subject <SubjectLink subject={subject} /></>}>
        <Row>
            <Col md={3}>
                <SubjectMediumCard subject={subject} />
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
                <RawCard subject={subject}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
