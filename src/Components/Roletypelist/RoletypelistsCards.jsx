import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypelistMediumCard as MediumCard} from './RoletypelistMediumCard';
import { RoletypelistLoadMoreButton as LoadMoreButton} from './RoletypelistLoadMoreButton';
/**
 * 
 */
export const RoletypelistsCards = ({ roletypelists, children }) => {
    return (
        <>
        <Row>
        { roletypelists.map(
            roletypelist => <Col xl={4} md={6} xs={12} key={ roletypelist.id } ><MediumCard key={ roletypelist.id } roletypelist={ roletypelist } /></Col>
            
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

