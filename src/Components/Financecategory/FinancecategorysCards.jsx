import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancecategoryMediumCard as MediumCard} from './FinancecategoryMediumCard';
import { FinancecategoryLoadMoreButton as LoadMoreButton} from './FinancecategoryLoadMoreButton';
/**
 * Entity representing a finance category
 */
export const FinancecategorysCards = ({ financecategorys, children }) => {
    return (
        <>
        <Row>
        { financecategorys.map(
            financecategory => <Col xl={4} md={6} xs={12} key={ financecategory.id } ><MediumCard key={ financecategory.id } financecategory={ financecategory } /></Col>
            
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

