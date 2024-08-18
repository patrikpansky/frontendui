import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { RequestMediumCard } from './RequestMediumCard';
import { RequestHistoryCard } from './RequestHistoryCard';
import { RequestButtons } from './RequestButtons';
import { RequestRights } from './RequestRights';

const RawCard = ({request}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={request} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const RequestLargeCard = ({request, children}) => {
    return (
        <CardCapsule  title={<>Požadavek {request?.name } </>}>
            {/* <Row className='justify-content-center'>

                <Col className="offset-md-3 align-self-center"><RequestButtons request={request}/></Col>
            </Row>
            <br/>
            <div className='row justify-content-center'>
                <div className="col offset-md-3 align-self-center"><RequestButtons request={request}/></div>
            </div>
            <br/> */}
            <Row>
                <Col md={3}>
                    <RequestMediumCard request={request} />
                </Col>
                <Col>
                    <RequestHistoryCard request={request} />
                    
                </Col>
                <Col md={4}>
                    <RequestRights request={request} />
                    < br/><RequestButtons request={request}/>
                </Col>
                {/* <Col md={9}>
                    {children}
                </Col>                */}
            </Row>
            <br/>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
            <br/>
            {/* <Row>
                <Col><RequestButtons request={request}/></Col>
            </Row>

            <br /> */}
            <Row>
                <Col>
                    <RawCard request={request}/>
                </Col>
            </Row>
        </CardCapsule>

    )
}
