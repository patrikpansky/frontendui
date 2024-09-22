import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestionvalueCardCapsule } from './QuestionvalueCardCapsule';

export const QuestionvalueEditCardMutation = `
mutation QuestionvalueEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: questionvalueUpdate(questionvalue: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: questionvalue {
            __typename
            id
            name
            lastchange
            created
            order
        }
    }
}`

const QuestionvalueUpdateAsyncAction = CreateAsyncActionFromMutation(QuestionvalueEditCardMutation)

export const QuestionvalueEditCard = ({ questionvalue, children, label=""}) => {
    return (       
        <QuestionvalueCardCapsule questionvalue={ questionvalue } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ questionvalue } attributeName="id" label="Id" asyncUpdater={ QuestionvalueUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questionvalue } attributeName="name" label="Name" asyncUpdater={ QuestionvalueUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questionvalue } attributeName="lastchange" label="Lastchange" asyncUpdater={ QuestionvalueUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questionvalue } attributeName="created" label="Created" asyncUpdater={ QuestionvalueUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questionvalue } attributeName="order" label="Order" asyncUpdater={ QuestionvalueUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </QuestionvalueCardCapsule>
    )
}
