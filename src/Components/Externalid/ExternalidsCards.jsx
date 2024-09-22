import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidMediumCard as MediumCard} from './ExternalidMediumCard';
import { ExternalidLoadMoreButton as LoadMoreButton} from './ExternalidLoadMoreButton';
/**
 * Entity representing an external type id (like SCOPUS identification / id)
 */
export const ExternalidsCards = ({ externalids, children }) => {
    return (
        <>
        <Row>
        { externalids.map(
            externalid => <Col xl={4} md={6} xs={12} key={ externalid.id } ><MediumCard key={ externalid.id } externalid={ externalid } /></Col>
            
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

