import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MilestoneCardCapsule } from './MilestoneCardCapsule';

export const MilestoneEditCardMutation = `
mutation MilestoneEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: milestoneUpdate(milestone: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: milestone {
            __typename
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
    }
}`

const MilestoneUpdateAsyncAction = CreateAsyncActionFromMutation(MilestoneEditCardMutation)

export const MilestoneEditCard = ({ milestone, children, label=""}) => {
    return (       
        <MilestoneCardCapsule milestone={ milestone } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="id" label="Id" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="name" label="Name" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="startdate" label="Startdate" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="enddate" label="Enddate" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="lastchange" label="Lastchange" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="created" label="Created" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ milestone } attributeName="valid" label="Valid" asyncUpdater={ MilestoneUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </MilestoneCardCapsule>
    )
}
