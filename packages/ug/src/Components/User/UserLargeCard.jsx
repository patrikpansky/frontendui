import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PersonFill } from 'react-bootstrap-icons'

import { CardCapsule } from '@hrbolek/uoisfrontend-shared'
import { UserMediumCard } from './UserMediumCard'
import { UserLink } from './UserLink'

export const UserLargeCard = ({user, children}) => {
    return (
        <CardCapsule  title={<><PersonFill /> <UserLink user={user } /></>}>
            <Row>
                <Col md={3}>
                    <UserMediumCard user={user}/>
                </Col>
                <Col md={9}>
                    {children}
                </Col>
            </Row>
        </CardCapsule>
    )
}