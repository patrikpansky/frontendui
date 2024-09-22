import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { UserCardCapsule } from './UserCardCapsule';

export const UserEditCardMutation = `
mutation UserEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: userUpdate(user: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: user {
            __typename
            id
            created
            lastchange
            name
            firstname
            surname
            fullname
            email
            valid
            isThisMe
            gdpr
        }
    }
}`

const UserUpdateAsyncAction = CreateAsyncActionFromMutation(UserEditCardMutation)

export const UserEditCard = ({ user, children, label=""}) => {
    return (       
        <UserCardCapsule user={ user } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="id" label="Id" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="created" label="Created" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="lastchange" label="Lastchange" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="name" label="Name" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="firstname" label="Firstname" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="surname" label="Surname" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="fullname" label="Fullname" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="email" label="Email" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="valid" label="Valid" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="isthisme" label="Isthisme" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ user } attributeName="gdpr" label="Gdpr" asyncUpdater={ UserUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </UserCardCapsule>
    )
}
