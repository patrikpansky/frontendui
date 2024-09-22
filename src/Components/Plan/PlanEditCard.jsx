import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PlanCardCapsule } from './PlanCardCapsule';

export const PlanEditCardMutation = `
mutation PlanEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: planUpdate(plan: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: plan {
            __typename
            id
            name
            lastchange
            created
        }
    }
}`

const PlanUpdateAsyncAction = CreateAsyncActionFromMutation(PlanEditCardMutation)

export const PlanEditCard = ({ plan, children, label=""}) => {
    return (       
        <PlanCardCapsule plan={ plan } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ plan } attributeName="id" label="Id" asyncUpdater={ PlanUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plan } attributeName="name" label="Name" asyncUpdater={ PlanUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plan } attributeName="lastchange" label="Lastchange" asyncUpdater={ PlanUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ plan } attributeName="created" label="Created" asyncUpdater={ PlanUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PlanCardCapsule>
    )
}
