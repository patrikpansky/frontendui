import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserMediumCard } from './UserMediumCard'
import { UserGroups } from './Vectors/Groups'
import { UserCardCapsule } from './UserCardCapsule'
import { UserRolesCard } from './Vectors'

export const UserLargeCard = ({user, children}) => {
    return (
        <UserCardCapsule user={user } >
            <Row>
                <Col xl={3} md={12}>
                    <UserMediumCard user={user}/>
                    <UserGroups user={user} />
                </Col>
                <Col xl={9} md={12}>
                    <UserRolesCard user={user} />
                    {children}
                </Col>
            </Row>
        </UserCardCapsule>
    )
}