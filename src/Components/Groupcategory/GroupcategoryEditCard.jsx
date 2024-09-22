import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupcategoryCardCapsule } from './GroupcategoryCardCapsule';

export const GroupcategoryEditCardMutation = `
mutation GroupcategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: groupcategoryUpdate(groupcategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: groupcategory {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const GroupcategoryUpdateAsyncAction = CreateAsyncActionFromMutation(GroupcategoryEditCardMutation)

export const GroupcategoryEditCard = ({ groupcategory, children, label=""}) => {
    return (       
        <GroupcategoryCardCapsule groupcategory={ groupcategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ groupcategory } attributeName="id" label="Id" asyncUpdater={ GroupcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ groupcategory } attributeName="created" label="Created" asyncUpdater={ GroupcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ groupcategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ GroupcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ groupcategory } attributeName="name" label="Name" asyncUpdater={ GroupcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ groupcategory } attributeName="nameen" label="Nameen" asyncUpdater={ GroupcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </GroupcategoryCardCapsule>
    )
}
