import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinanceMediumCard as MediumCard} from './FinanceMediumCard';
import { FinanceLoadMoreButton as LoadMoreButton} from './FinanceLoadMoreButton';
/**
 * Entity representing a finance
 */
export const FinancesCards = ({ finances, children }) => {
    return (
        <>
        <Row>
        { finances.map(
            finance => <Col xl={4} md={6} xs={12} key={ finance.id } ><MediumCard key={ finance.id } finance={ finance } /></Col>
            
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

