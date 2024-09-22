import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SurveytypeCardCapsule } from './SurveytypeCardCapsule';

export const SurveytypeEditCardMutation = `
mutation SurveytypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: surveytypeUpdate(surveytype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: surveytype {
            __typename
            id
            name
            lastchange
            created
        }
    }
}`

const SurveytypeUpdateAsyncAction = CreateAsyncActionFromMutation(SurveytypeEditCardMutation)

export const SurveytypeEditCard = ({ surveytype, children, label=""}) => {
    return (       
        <SurveytypeCardCapsule surveytype={ surveytype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ surveytype } attributeName="id" label="Id" asyncUpdater={ SurveytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ surveytype } attributeName="name" label="Name" asyncUpdater={ SurveytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ surveytype } attributeName="lastchange" label="Lastchange" asyncUpdater={ SurveytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ surveytype } attributeName="created" label="Created" asyncUpdater={ SurveytypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </SurveytypeCardCapsule>
    )
}
