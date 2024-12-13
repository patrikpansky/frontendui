import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PersonFill } from 'react-bootstrap-icons'

import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { UserMediumCard } from './UserMediumCard'
import { UserLink } from './UserLink'
import { UserGroups } from './Vectors/Groups'
import { UserEventsCard } from './Vectors/UserEventsCard'

export const UserLargeCard = ({user, children}) => {
    return (
        <CardCapsule  title={<><PersonFill /> <UserLink user={user } /></>}>
            <Row>
                <Col xl={3} md={12}>
                    <UserMediumCard user={user}/>
                    <UserGroups user={user} />
                </Col>
                <Col xl={9} md={12}>
                    {children}
                </Col>
            </Row>
        </CardCapsule>
    )
}