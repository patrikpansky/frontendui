/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from './UserLink'
import { UpdateUserAsyncAction } from '../../Queries'


export const UserEditCard = ({user}) => {
    return (       
        <CardCapsule title={<UserLink user={user } />} >
            
            <Row>
                <Col>Jméno</Col>
                <Col>
                    <EditableAttributeText item={user} attributeName="name" label="Jméno" asyncUpdater={UpdateUserAsyncAction} />
                </Col>
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
        </CardCapsule>
    )
}
