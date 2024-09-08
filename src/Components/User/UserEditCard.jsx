/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserLink } from './UserLink'
import { UpdateUserAsyncAction } from '../../Queries'
import { PersonFill } from 'react-bootstrap-icons'

export const UserEditCard = ({user}) => {
    return (       
        <CardCapsule title={<><PersonFill /> <UserLink user={user } /></>} >
            <Row>
                <Col>
                    <EditableAttributeText item={user} attributeName="name" label="Jméno" asyncUpdater={UpdateUserAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={user} attributeName="surname" label="Příjmení" asyncUpdater={UpdateUserAsyncAction} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={user} attributeName="email" label="Email" asyncUpdater={UpdateUserAsyncAction} />
                </Col>
            </Row>
        </CardCapsule>
    )
}
