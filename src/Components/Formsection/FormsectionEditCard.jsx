import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FormsectionCardCapsule } from './FormsectionCardCapsule';

export const FormsectionEditCardMutation = `
mutation FormsectionEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: formsectionUpdate(formsection: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: formsection {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }
}`

const FormsectionUpdateAsyncAction = CreateAsyncActionFromMutation(FormsectionEditCardMutation)

export const FormsectionEditCard = ({ formsection, children, label=""}) => {
    return (       
        <FormsectionCardCapsule formsection={ formsection } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="id" label="Id" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="name" label="Name" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="lastchange" label="Lastchange" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="created" label="Created" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="nameen" label="Nameen" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ formsection } attributeName="order" label="Order" asyncUpdater={ FormsectionUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FormsectionCardCapsule>
    )
}
