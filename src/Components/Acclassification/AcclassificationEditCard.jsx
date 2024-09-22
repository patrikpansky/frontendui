import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcclassificationCardCapsule } from './AcclassificationCardCapsule';

export const AcclassificationEditCardMutation = `
mutation AcclassificationEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acclassificationUpdate(acclassification: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acclassification {
            __typename
            id
            created
            lastchange
            date
            order
        }
    }
}`

const AcclassificationUpdateAsyncAction = CreateAsyncActionFromMutation(AcclassificationEditCardMutation)

export const AcclassificationEditCard = ({ acclassification, children, label=""}) => {
    return (       
        <AcclassificationCardCapsule acclassification={ acclassification } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassification } attributeName="id" label="Id" asyncUpdater={ AcclassificationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassification } attributeName="created" label="Created" asyncUpdater={ AcclassificationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassification } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcclassificationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassification } attributeName="date" label="Date" asyncUpdater={ AcclassificationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acclassification } attributeName="order" label="Order" asyncUpdater={ AcclassificationUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcclassificationCardCapsule>
    )
}
