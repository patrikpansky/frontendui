import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { RequestMediumCard } from './RequestMediumCard';
import { RequestHistoryCard } from './RequestHistoryCard';

const RawCard = ({request}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={request} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const RequestLargeCard = ({request, children}) => {
    return (
        <CardCapsule  title={<>Požadavek {request?.name }</>}>
            <Row>
                <Col md={3}>
                    <RequestMediumCard request={request} />
                    <br />
                    <RequestHistoryCard request={request} />
                </Col>
                <Col md={9}>
                    {children}
                </Col>               
            </Row>
            <br />
            <Row>
                <Col>
                    <RawCard request={request}/>
                </Col>
            </Row>
        </CardCapsule>

    )
}
