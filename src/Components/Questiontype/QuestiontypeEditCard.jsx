import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { QuestiontypeCardCapsule } from './QuestiontypeCardCapsule';

export const QuestiontypeEditCardMutation = `
mutation QuestiontypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: questiontypeUpdate(questiontype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: questiontype {
            __typename
            id
            name
            lastchange
            created
        }
    }
}`

const QuestiontypeUpdateAsyncAction = CreateAsyncActionFromMutation(QuestiontypeEditCardMutation)

export const QuestiontypeEditCard = ({ questiontype, children, label=""}) => {
    return (       
        <QuestiontypeCardCapsule questiontype={ questiontype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ questiontype } attributeName="id" label="Id" asyncUpdater={ QuestiontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questiontype } attributeName="name" label="Name" asyncUpdater={ QuestiontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questiontype } attributeName="lastchange" label="Lastchange" asyncUpdater={ QuestiontypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ questiontype } attributeName="created" label="Created" asyncUpdater={ QuestiontypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </QuestiontypeCardCapsule>
    )
}
