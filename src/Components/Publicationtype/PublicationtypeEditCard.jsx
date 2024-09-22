import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationtypeCardCapsule } from './PublicationtypeCardCapsule';

export const PublicationtypeEditCardMutation = `
mutation PublicationtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: publicationtypeUpdate(publicationtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: publicationtype {
            __typename
            id
            name
            created
            lastchange
        }
    }
}`

const PublicationtypeUpdateAsyncAction = CreateAsyncActionFromMutation(PublicationtypeEditCardMutation)

export const PublicationtypeEditCard = ({ publicationtype, children, label=""}) => {
    return (       
        <PublicationtypeCardCapsule publicationtype={ publicationtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationtype } attributeName="id" label="Id" asyncUpdater={ PublicationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationtype } attributeName="name" label="Name" asyncUpdater={ PublicationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationtype } attributeName="created" label="Created" asyncUpdater={ PublicationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ PublicationtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PublicationtypeCardCapsule>
    )
}
