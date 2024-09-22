import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PresencetypeCardCapsule } from './PresencetypeCardCapsule';

export const PresencetypeEditCardMutation = `
mutation PresencetypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: presencetypeUpdate(presencetype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: presencetype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const PresencetypeUpdateAsyncAction = CreateAsyncActionFromMutation(PresencetypeEditCardMutation)

export const PresencetypeEditCard = ({ presencetype, children, label=""}) => {
    return (       
        <PresencetypeCardCapsule presencetype={ presencetype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ presencetype } attributeName="id" label="Id" asyncUpdater={ PresencetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presencetype } attributeName="name" label="Name" asyncUpdater={ PresencetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presencetype } attributeName="nameen" label="Nameen" asyncUpdater={ PresencetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presencetype } attributeName="lastchange" label="Lastchange" asyncUpdater={ PresencetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ presencetype } attributeName="created" label="Created" asyncUpdater={ PresencetypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PresencetypeCardCapsule>
    )
}
