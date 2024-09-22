import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatementofworkMediumCard as MediumCard} from './StatementofworkMediumCard';
import { StatementofworkLoadMoreButton as LoadMoreButton} from './StatementofworkLoadMoreButton';
/**
 * Entity representing a SOW
 */
export const StatementofworksCards = ({ statementofworks, children }) => {
    return (
        <>
        <Row>
        { statementofworks.map(
            statementofwork => <Col xl={4} md={6} xs={12} key={ statementofwork.id } ><MediumCard key={ statementofwork.id } statementofwork={ statementofwork } /></Col>
            
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

