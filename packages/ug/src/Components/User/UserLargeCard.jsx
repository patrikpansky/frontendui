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
                <Col xl={3} md={12}>
                    <UserMediumCard user={user}/>
                </Col>
                <Col xl={9} md={12}>
                    <UserMediumCard user={user}/>
                    {children}
                </Col>
            </Row>
        </CardCapsule>
    )
}