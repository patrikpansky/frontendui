import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserMediumCard as MediumCard} from './UserMediumCard';
import { UserLoadMoreButton as LoadMoreButton} from './UserLoadMoreButton';
/**
 * Entity representing a user
 */
export const UsersCards = ({ users, children }) => {
    return (
        <>
        <Row>
        { users.map(
            user => <Col xl={4} md={6} xs={12} key={ user.id } ><MediumCard key={ user.id } user={ user } /></Col>
            
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

