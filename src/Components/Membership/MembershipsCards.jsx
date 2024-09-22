import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MembershipMediumCard as MediumCard} from './MembershipMediumCard';
import { MembershipLoadMoreButton as LoadMoreButton} from './MembershipLoadMoreButton';
/**
 * Entity representing a relation between an user and a group
 */
export const MembershipsCards = ({ memberships, children }) => {
    return (
        <>
        <Row>
        { memberships.map(
            membership => <Col xl={4} md={6} xs={12} key={ membership.id } ><MediumCard key={ membership.id } membership={ membership } /></Col>
            
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

