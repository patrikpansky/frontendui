import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormpartMediumCard as MediumCard} from './FormpartMediumCard';
import { FormpartLoadMoreButton as LoadMoreButton} from './FormpartLoadMoreButton';
/**
 * Type representing a part in the section
 */
export const FormpartsCards = ({ formparts, children }) => {
    return (
        <>
        <Row>
        { formparts.map(
            formpart => <Col xl={4} md={6} xs={12} key={ formpart.id } ><MediumCard key={ formpart.id } formpart={ formpart } /></Col>
            
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

