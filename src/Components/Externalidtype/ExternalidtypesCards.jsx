import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidtypeMediumCard as MediumCard} from './ExternalidtypeMediumCard';
import { ExternalidtypeLoadMoreButton as LoadMoreButton} from './ExternalidtypeLoadMoreButton';
/**
 * Entity representing an external type id (like SCOPUS identification / id)
 */
export const ExternalidtypesCards = ({ externalidtypes, children }) => {
    return (
        <>
        <Row>
        { externalidtypes.map(
            externalidtype => <Col xl={4} md={6} xs={12} key={ externalidtype.id } ><MediumCard key={ externalidtype.id } externalidtype={ externalidtype } /></Col>
            
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

