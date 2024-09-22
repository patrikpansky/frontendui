import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestionCardCapsule } from './QuestionCardCapsule';

export const QuestionEditCardMutation = `
mutation QuestionEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: questionUpdate(question: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: question {
            __typename
            id
            name
            lastchange
            created
            order
        }
    }
}`

const QuestionUpdateAsyncAction = CreateAsyncActionFromMutation(QuestionEditCardMutation)

export const QuestionEditCard = ({ question, children, label=""}) => {
    return (       
        <QuestionCardCapsule question={ question } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ question } attributeName="id" label="Id" asyncUpdater={ QuestionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ question } attributeName="name" label="Name" asyncUpdater={ QuestionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ question } attributeName="lastchange" label="Lastchange" asyncUpdater={ QuestionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ question } attributeName="created" label="Created" asyncUpdater={ QuestionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ question } attributeName="order" label="Order" asyncUpdater={ QuestionUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </QuestionCardCapsule>
    )
}
