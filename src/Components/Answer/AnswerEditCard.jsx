import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AnswerCardCapsule } from './AnswerCardCapsule';

export const AnswerEditCardMutation = `
mutation AnswerEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: answerUpdate(answer: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: answer {
            __typename
            id
            lastchange
            created
            value
            aswered
            expired
        }
    }
}`

const AnswerUpdateAsyncAction = CreateAsyncActionFromMutation(AnswerEditCardMutation)

export const AnswerEditCard = ({ answer, children, label=""}) => {
    return (       
        <AnswerCardCapsule answer={ answer } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="id" label="Id" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="lastchange" label="Lastchange" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="created" label="Created" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="value" label="Value" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="aswered" label="Aswered" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ answer } attributeName="expired" label="Expired" asyncUpdater={ AnswerUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AnswerCardCapsule>
    )
}
