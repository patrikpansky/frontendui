import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationMediumCard as MediumCard} from './PublicationMediumCard';
import { PublicationLoadMoreButton as LoadMoreButton} from './PublicationLoadMoreButton';
/**
 * Entity representing a publication
 */
export const PublicationsCards = ({ publications, children }) => {
    return (
        <>
        <Row>
        { publications.map(
            publication => <Col xl={4} md={6} xs={12} key={ publication.id } ><MediumCard key={ publication.id } publication={ publication } /></Col>
            
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

