import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveyCardCapsule } from './SurveyCardCapsule';

export const SurveyEditCardMutation = `
mutation SurveyEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: surveyUpdate(survey: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: survey {
            __typename
            id
            name
            lastchange
            created
        }
    }
}`

const SurveyUpdateAsyncAction = CreateAsyncActionFromMutation(SurveyEditCardMutation)

export const SurveyEditCard = ({ survey, children, label=""}) => {
    return (       
        <SurveyCardCapsule survey={ survey } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ survey } attributeName="id" label="Id" asyncUpdater={ SurveyUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ survey } attributeName="name" label="Name" asyncUpdater={ SurveyUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ survey } attributeName="lastchange" label="Lastchange" asyncUpdater={ SurveyUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ survey } attributeName="created" label="Created" asyncUpdater={ SurveyUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </SurveyCardCapsule>
    )
}
