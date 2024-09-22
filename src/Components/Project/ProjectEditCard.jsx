import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectCardCapsule } from './ProjectCardCapsule';

export const ProjectEditCardMutation = `
mutation ProjectEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: projectUpdate(project: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: project {
            __typename
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
        }
    }
}`

const ProjectUpdateAsyncAction = CreateAsyncActionFromMutation(ProjectEditCardMutation)

export const ProjectEditCard = ({ project, children, label=""}) => {
    return (       
        <ProjectCardCapsule project={ project } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="id" label="Id" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="name" label="Name" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="startdate" label="Startdate" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="enddate" label="Enddate" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="created" label="Created" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="lastchange" label="Lastchange" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ project } attributeName="valid" label="Valid" asyncUpdater={ ProjectUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ProjectCardCapsule>
    )
}
