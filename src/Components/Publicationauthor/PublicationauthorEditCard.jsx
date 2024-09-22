import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationauthorCardCapsule } from './PublicationauthorCardCapsule';

export const PublicationauthorEditCardMutation = `
mutation PublicationauthorEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: publicationauthorUpdate(publicationauthor: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: publicationauthor {
            __typename
            id
            name
            lastchange
            order
            share
            valid
        }
    }
}`

const PublicationauthorUpdateAsyncAction = CreateAsyncActionFromMutation(PublicationauthorEditCardMutation)

export const PublicationauthorEditCard = ({ publicationauthor, children, label=""}) => {
    return (       
        <PublicationauthorCardCapsule publicationauthor={ publicationauthor } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="id" label="Id" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="name" label="Name" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="lastchange" label="Lastchange" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="order" label="Order" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="share" label="Share" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publicationauthor } attributeName="valid" label="Valid" asyncUpdater={ PublicationauthorUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PublicationauthorCardCapsule>
    )
}
