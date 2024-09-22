import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AclessonCardCapsule } from './AclessonCardCapsule';

export const AclessonEditCardMutation = `
mutation AclessonEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: aclessonUpdate(aclesson: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: aclesson {
            __typename
            id
            name
            nameEn
            created
            lastchange
            count
        }
    }
}`

const AclessonUpdateAsyncAction = CreateAsyncActionFromMutation(AclessonEditCardMutation)

export const AclessonEditCard = ({ aclesson, children, label=""}) => {
    return (       
        <AclessonCardCapsule aclesson={ aclesson } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="id" label="Id" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="name" label="Name" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="nameen" label="Nameen" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="created" label="Created" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="lastchange" label="Lastchange" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ aclesson } attributeName="count" label="Count" asyncUpdater={ AclessonUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AclessonCardCapsule>
    )
}
