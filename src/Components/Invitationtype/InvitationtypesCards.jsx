import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { InvitationtypeMediumCard as MediumCard} from './InvitationtypeMediumCard';
import { InvitationtypeLoadMoreButton as LoadMoreButton} from './InvitationtypeLoadMoreButton';
/**
 * Represents if an user has been invited to the event ot whatever
 */
export const InvitationtypesCards = ({ invitationtypes, children }) => {
    return (
        <>
        <Row>
        { invitationtypes.map(
            invitationtype => <Col xl={4} md={6} xs={12} key={ invitationtype.id } ><MediumCard key={ invitationtype.id } invitationtype={ invitationtype } /></Col>
            
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

