import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoleMediumCard as MediumCard} from './RoleMediumCard';
import { RoleLoadMoreButton as LoadMoreButton} from './RoleLoadMoreButton';
/**
 * Entity representing a role of a user in a group (like user A in group B is Dean)
 */
export const RolesCards = ({ roles, children }) => {
    return (
        <>
        <Row>
        { roles.map(
            role => <Col xl={4} md={6} xs={12} key={ role.id } ><MediumCard key={ role.id } role={ role } /></Col>
            
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

