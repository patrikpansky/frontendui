import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormMediumCard as MediumCard} from './FormMediumCard';
import { FormLoadMoreButton as LoadMoreButton} from './FormLoadMoreButton';
/**
 * # Reason

Entity representing a form, form is digitalized A4 sheet

## Structure

form -&gt; sections -&gt; parts -&gt; items
 */
export const FormsCards = ({ forms, children }) => {
    return (
        <>
        <Row>
        { forms.map(
            form => <Col xl={4} md={6} xs={12} key={ form.id } ><MediumCard key={ form.id } form={ form } /></Col>
            
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

