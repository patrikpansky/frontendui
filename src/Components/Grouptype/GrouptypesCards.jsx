import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GrouptypeMediumCard as MediumCard} from './GrouptypeMediumCard';
import { GrouptypeLoadMoreButton as LoadMoreButton} from './GrouptypeLoadMoreButton';
/**
 * Entity representing a group type (like Faculty)
 */
export const GrouptypesCards = ({ grouptypes, children }) => {
    return (
        <>
        <Row>
        { grouptypes.map(
            grouptype => <Col xl={4} md={6} xs={12} key={ grouptype.id } ><MediumCard key={ grouptype.id } grouptype={ grouptype } /></Col>
            
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

