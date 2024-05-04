/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from './UserLink'
import { Link } from 'react-router-dom'

export const UserCard = ({user}) => {
    return (
        <div>
        <CardCapsule title={<>Uživatel <UserLink user={user } /></>}>
            
            <Row>
                <Col>Jméno</Col>
                <Col>{user.name}</Col>
            </Row>
            <Row>
                <Col>Příjmení</Col>
                <Col>{user.surname}</Col>
            </Row>
            <Row>
                <Col>
                    <button className='btn btn-success'>click</button>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <Link to={"/events/event/view/4dccf52f-4117-403c-932a-5691c0d020b1"}>Event</Link>
                </Col>
                <Col></Col>
            </Row>
        </CardCapsule>
        </div>
    )
}
