import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RequestCardCapsule } from './RequestCardCapsule';

export const RequestEditCardMutation = `
mutation RequestEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: requestUpdate(request: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: request {
            __typename
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
    }
}`

const RequestUpdateAsyncAction = CreateAsyncActionFromMutation(RequestEditCardMutation)

export const RequestEditCard = ({ request, children, label=""}) => {
    return (       
        <RequestCardCapsule request={ request } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="id" label="Id" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="name" label="Name" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="lastchange" label="Lastchange" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="created" label="Created" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="nameen" label="Nameen" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ request } attributeName="gdpr" label="Gdpr" asyncUpdater={ RequestUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RequestCardCapsule>
    )
}
