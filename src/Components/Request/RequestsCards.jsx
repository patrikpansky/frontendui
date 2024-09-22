import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RequestMediumCard as MediumCard} from './RequestMediumCard';
import { RequestLoadMoreButton as LoadMoreButton} from './RequestLoadMoreButton';
/**
 * Entity representing a request (digital form of a paper, aka &quot;student request to the dean&quot;)
 */
export const RequestsCards = ({ requests, children }) => {
    return (
        <>
        <Row>
        { requests.map(
            request => <Col xl={4} md={6} xs={12} key={ request.id } ><MediumCard key={ request.id } request={ request } /></Col>
            
        )}
        </Row>
        <Row>
            <Col xl={12} md={12} xs={12} >
                {children}
            </Col>
        </Row>
        </>
    )
}

