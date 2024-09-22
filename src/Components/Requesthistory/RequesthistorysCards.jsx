import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RequesthistoryMediumCard as MediumCard} from './RequesthistoryMediumCard';
import { RequesthistoryLoadMoreButton as LoadMoreButton} from './RequesthistoryLoadMoreButton';
/**
 * Entity which stores a history of form evolution during a request. This allows to recall form changes.
 */
export const RequesthistorysCards = ({ requesthistorys, children }) => {
    return (
        <>
        <Row>
        { requesthistorys.map(
            requesthistory => <Col xl={4} md={6} xs={12} key={ requesthistory.id } ><MediumCard key={ requesthistory.id } requesthistory={ requesthistory } /></Col>
            
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

