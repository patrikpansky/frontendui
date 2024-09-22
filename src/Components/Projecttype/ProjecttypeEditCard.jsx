import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjecttypeCardCapsule } from './ProjecttypeCardCapsule';

export const ProjecttypeEditCardMutation = `
mutation ProjecttypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: projecttypeUpdate(projecttype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: projecttype {
            __typename
            id
            name
            nameEn
            created
            lastchange
            valid
        }
    }
}`

const ProjecttypeUpdateAsyncAction = CreateAsyncActionFromMutation(ProjecttypeEditCardMutation)

export const ProjecttypeEditCard = ({ projecttype, children, label=""}) => {
    return (       
        <ProjecttypeCardCapsule projecttype={ projecttype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="id" label="Id" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="name" label="Name" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="nameen" label="Nameen" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="created" label="Created" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="lastchange" label="Lastchange" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projecttype } attributeName="valid" label="Valid" asyncUpdater={ ProjecttypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ProjecttypeCardCapsule>
    )
}
