import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatetransitionCardCapsule } from './StatetransitionCardCapsule';

export const StatetransitionEditCardMutation = `
mutation StatetransitionEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: statetransitionUpdate(statetransition: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: statetransition {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
}`

const StatetransitionUpdateAsyncAction = CreateAsyncActionFromMutation(StatetransitionEditCardMutation)

export const StatetransitionEditCard = ({ statetransition, children, label=""}) => {
    return (       
        <StatetransitionCardCapsule statetransition={ statetransition } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ statetransition } attributeName="id" label="Id" asyncUpdater={ StatetransitionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statetransition } attributeName="created" label="Created" asyncUpdater={ StatetransitionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statetransition } attributeName="lastchange" label="Lastchange" asyncUpdater={ StatetransitionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statetransition } attributeName="name" label="Name" asyncUpdater={ StatetransitionUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statetransition } attributeName="nameen" label="Nameen" asyncUpdater={ StatetransitionUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </StatetransitionCardCapsule>
    )
}
