import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupMediumCard as MediumCard} from './GroupMediumCard';
import { GroupLoadMoreButton as LoadMoreButton} from './GroupLoadMoreButton';
/**
 * Entity representing a group
 */
export const GroupsCards = ({ groups, children }) => {
    return (
        <>
        <Row>
        { groups.map(
            group => <Col xl={4} md={6} xs={12} key={ group.id } ><MediumCard key={ group.id } group={ group } /></Col>
            
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

