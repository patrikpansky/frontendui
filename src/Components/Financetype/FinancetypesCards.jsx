import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancetypeMediumCard as MediumCard} from './FinancetypeMediumCard';
import { FinancetypeLoadMoreButton as LoadMoreButton} from './FinancetypeLoadMoreButton';
/**
 * Entity representing a finance type
 */
export const FinancetypesCards = ({ financetypes, children }) => {
    return (
        <>
        <Row>
        { financetypes.map(
            financetype => <Col xl={4} md={6} xs={12} key={ financetype.id } ><MediumCard key={ financetype.id } financetype={ financetype } /></Col>
            
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

