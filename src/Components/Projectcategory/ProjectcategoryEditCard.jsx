import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ProjectcategoryCardCapsule } from './ProjectcategoryCardCapsule';

export const ProjectcategoryEditCardMutation = `
mutation ProjectcategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: projectcategoryUpdate(projectcategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: projectcategory {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const ProjectcategoryUpdateAsyncAction = CreateAsyncActionFromMutation(ProjectcategoryEditCardMutation)

export const ProjectcategoryEditCard = ({ projectcategory, children, label=""}) => {
    return (       
        <ProjectcategoryCardCapsule projectcategory={ projectcategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ projectcategory } attributeName="id" label="Id" asyncUpdater={ ProjectcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projectcategory } attributeName="name" label="Name" asyncUpdater={ ProjectcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projectcategory } attributeName="nameen" label="Nameen" asyncUpdater={ ProjectcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projectcategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ ProjectcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ projectcategory } attributeName="created" label="Created" asyncUpdater={ ProjectcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ProjectcategoryCardCapsule>
    )
}
