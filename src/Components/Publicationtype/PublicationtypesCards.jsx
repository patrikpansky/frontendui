import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationtypeMediumCard as MediumCard} from './PublicationtypeMediumCard';
import { PublicationtypeLoadMoreButton as LoadMoreButton} from './PublicationtypeLoadMoreButton';
/**
 * Entity representing a publication type
 */
export const PublicationtypesCards = ({ publicationtypes, children }) => {
    return (
        <>
        <Row>
        { publicationtypes.map(
            publicationtype => <Col xl={4} md={6} xs={12} key={ publicationtype.id } ><MediumCard key={ publicationtype.id } publicationtype={ publicationtype } /></Col>
            
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

