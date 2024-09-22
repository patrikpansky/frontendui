import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationlevelCardCapsule } from './AcclassificationlevelCardCapsule';

export const AcclassificationlevelEditCardMutation = `
mutation AcclassificationlevelEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acclassificationlevelUpdate(acclassificationlevel: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acclassificationlevel {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcclassificationlevelUpdateAsyncAction = CreateAsyncActionFromMutation(AcclassificationlevelEditCardMutation)

export const AcclassificationlevelEditCard = ({ acclassificationlevel, children, label=""}) => {
    return (       
        <AcclassificationlevelCardCapsule acclassificationlevel={ acclassificationlevel } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationlevel } attributeName="id" label="Id" asyncUpdater={ AcclassificationlevelUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationlevel } attributeName="name" label="Name" asyncUpdater={ AcclassificationlevelUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationlevel } attributeName="nameen" label="Nameen" asyncUpdater={ AcclassificationlevelUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationlevel } attributeName="created" label="Created" asyncUpdater={ AcclassificationlevelUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationlevel } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcclassificationlevelUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcclassificationlevelCardCapsule>
    )
}
