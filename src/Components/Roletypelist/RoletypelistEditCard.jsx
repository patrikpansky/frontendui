import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { RoletypelistCardCapsule } from './RoletypelistCardCapsule';

export const RoletypelistEditCardMutation = `
mutation RoletypelistEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: roletypelistUpdate(roletypelist: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: roletypelist {
            __typename
            id
            created
            lastchange
        }
    }
}`

const RoletypelistUpdateAsyncAction = CreateAsyncActionFromMutation(RoletypelistEditCardMutation)

export const RoletypelistEditCard = ({ roletypelist, children, label=""}) => {
    return (       
        <RoletypelistCardCapsule roletypelist={ roletypelist } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ roletypelist } attributeName="id" label="Id" asyncUpdater={ RoletypelistUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletypelist } attributeName="created" label="Created" asyncUpdater={ RoletypelistUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ roletypelist } attributeName="lastchange" label="Lastchange" asyncUpdater={ RoletypelistUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </RoletypelistCardCapsule>
    )
}
