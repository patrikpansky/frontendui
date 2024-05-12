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
                    Email
                </Col>
                <Col>
                    <a href={"mailto:" + user?.email}>{user?.email}</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    Telefon
                </Col>
                <Col>
                    <a href="tel:973211111">973 211 111</a>
                </Col>
            </Row>
        </CardCapsule>
        </div>
    )
}
