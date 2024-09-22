import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupCardCapsule } from './GroupCardCapsule';

export const GroupEditCardMutation = `
mutation GroupEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: groupUpdate(group: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: group {
            __typename
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
    }
}`

const GroupUpdateAsyncAction = CreateAsyncActionFromMutation(GroupEditCardMutation)

export const GroupEditCard = ({ group, children, label=""}) => {
    return (       
        <GroupCardCapsule group={ group } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="id" label="Id" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="created" label="Created" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="lastchange" label="Lastchange" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="name" label="Name" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="nameen" label="Nameen" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="email" label="Email" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="abbreviation" label="Abbreviation" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="valid" label="Valid" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ group } attributeName="typeid" label="Typeid" asyncUpdater={ GroupUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </GroupCardCapsule>
    )
}
