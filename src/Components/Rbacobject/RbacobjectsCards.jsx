import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RbacobjectMediumCard as MediumCard} from './RbacobjectMediumCard';
import { RbacobjectLoadMoreButton as LoadMoreButton} from './RbacobjectLoadMoreButton';
/**
 * 
 */
export const RbacobjectsCards = ({ rbacobjects, children }) => {
    return (
        <>
        <Row>
        { rbacobjects.map(
            rbacobject => <Col xl={4} md={6} xs={12} key={ rbacobject.id } ><MediumCard key={ rbacobject.id } rbacobject={ rbacobject } /></Col>
            
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

