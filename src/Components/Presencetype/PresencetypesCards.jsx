import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresencetypeMediumCard as MediumCard} from './PresencetypeMediumCard';
import { PresencetypeLoadMoreButton as LoadMoreButton} from './PresencetypeLoadMoreButton';
/**
 * Represents a type of presence (like Present)
 */
export const PresencetypesCards = ({ presencetypes, children }) => {
    return (
        <>
        <Row>
        { presencetypes.map(
            presencetype => <Col xl={4} md={6} xs={12} key={ presencetype.id } ><MediumCard key={ presencetype.id } presencetype={ presencetype } /></Col>
            
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

