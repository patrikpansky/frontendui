import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormsectionMediumCard as MediumCard} from './FormsectionMediumCard';
import { FormsectionLoadMoreButton as LoadMoreButton} from './FormsectionLoadMoreButton';
/**
 * Type representing a section in the form
 */
export const FormsectionsCards = ({ formsections, children }) => {
    return (
        <>
        <Row>
        { formsections.map(
            formsection => <Col xl={4} md={6} xs={12} key={ formsection.id } ><MediumCard key={ formsection.id } formsection={ formsection } /></Col>
            
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

