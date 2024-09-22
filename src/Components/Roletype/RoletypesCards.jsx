import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypeMediumCard as MediumCard} from './RoletypeMediumCard';
import { RoletypeLoadMoreButton as LoadMoreButton} from './RoletypeLoadMoreButton';
/**
 * Entity representing a role type (like Dean)
 */
export const RoletypesCards = ({ roletypes, children }) => {
    return (
        <>
        <Row>
        { roletypes.map(
            roletype => <Col xl={4} md={6} xs={12} key={ roletype.id } ><MediumCard key={ roletype.id } roletype={ roletype } /></Col>
            
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

