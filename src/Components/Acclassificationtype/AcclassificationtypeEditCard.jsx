import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationtypeCardCapsule } from './AcclassificationtypeCardCapsule';

export const AcclassificationtypeEditCardMutation = `
mutation AcclassificationtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acclassificationtypeUpdate(acclassificationtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acclassificationtype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcclassificationtypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcclassificationtypeEditCardMutation)

export const AcclassificationtypeEditCard = ({ acclassificationtype, children, label=""}) => {
    return (       
        <AcclassificationtypeCardCapsule acclassificationtype={ acclassificationtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationtype } attributeName="id" label="Id" asyncUpdater={ AcclassificationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationtype } attributeName="name" label="Name" asyncUpdater={ AcclassificationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationtype } attributeName="nameen" label="Nameen" asyncUpdater={ AcclassificationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationtype } attributeName="created" label="Created" asyncUpdater={ AcclassificationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassificationtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcclassificationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcclassificationtypeCardCapsule>
    )
}
