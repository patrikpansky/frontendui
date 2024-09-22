import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationauthorMediumCard as MediumCard} from './PublicationauthorMediumCard';
import { PublicationauthorLoadMoreButton as LoadMoreButton} from './PublicationauthorLoadMoreButton';
/**
 * Entity representing a relation between an user and a publication
 */
export const PublicationauthorsCards = ({ publicationauthors, children }) => {
    return (
        <>
        <Row>
        { publicationauthors.map(
            publicationauthor => <Col xl={4} md={6} xs={12} key={ publicationauthor.id } ><MediumCard key={ publicationauthor.id } publicationauthor={ publicationauthor } /></Col>
            
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

