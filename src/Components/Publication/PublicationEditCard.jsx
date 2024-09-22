import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PublicationCardCapsule } from './PublicationCardCapsule';

export const PublicationEditCardMutation = `
mutation PublicationEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: publicationUpdate(publication: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: publication {
            __typename
            id
            name
            created
            lastchange
            publishedDate
            place
            reference
            valid
        }
    }
}`

const PublicationUpdateAsyncAction = CreateAsyncActionFromMutation(PublicationEditCardMutation)

export const PublicationEditCard = ({ publication, children, label=""}) => {
    return (       
        <PublicationCardCapsule publication={ publication } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="id" label="Id" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="name" label="Name" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="created" label="Created" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="lastchange" label="Lastchange" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="publisheddate" label="Publisheddate" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="place" label="Place" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="reference" label="Reference" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ publication } attributeName="valid" label="Valid" asyncUpdater={ PublicationUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </PublicationCardCapsule>
    )
}
