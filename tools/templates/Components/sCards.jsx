import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { {{Name name}}MediumCard as MediumCard} from './{{Name name}}MediumCard';
import { {{Name name}}LoadMoreButton as LoadMoreButton} from './{{Name name}}LoadMoreButton';
/**
 * {{description}}
 */
export const {{Name name}}sCards = ({ {{name name}}s, children }) => {
    return (
        <>
        <Row>
        { {{name name}}s.map(
            {{name name}} => <Col xl={4} md={6} xs={12} key={ {{name name}}.id } ><MediumCard key={ {{name name}}.id } {{name name}}={ {{name name}} } /></Col>
            
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

