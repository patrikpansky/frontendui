import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GrouptypeCardCapsule } from './GrouptypeCardCapsule';

export const GrouptypeEditCardMutation = `
mutation GrouptypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: grouptypeUpdate(grouptype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: grouptype {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const GrouptypeUpdateAsyncAction = CreateAsyncActionFromMutation(GrouptypeEditCardMutation)

export const GrouptypeEditCard = ({ grouptype, children, label=""}) => {
    return (       
        <GrouptypeCardCapsule grouptype={ grouptype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ grouptype } attributeName="id" label="Id" asyncUpdater={ GrouptypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ grouptype } attributeName="created" label="Created" asyncUpdater={ GrouptypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ grouptype } attributeName="lastchange" label="Lastchange" asyncUpdater={ GrouptypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ grouptype } attributeName="name" label="Name" asyncUpdater={ GrouptypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ grouptype } attributeName="nameen" label="Nameen" asyncUpdater={ GrouptypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </GrouptypeCardCapsule>
    )
}
