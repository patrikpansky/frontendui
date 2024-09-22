import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidcategoryCardCapsule } from './ExternalidcategoryCardCapsule';

export const ExternalidcategoryEditCardMutation = `
mutation ExternalidcategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: externalidcategoryUpdate(externalidcategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: externalidcategory {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const ExternalidcategoryUpdateAsyncAction = CreateAsyncActionFromMutation(ExternalidcategoryEditCardMutation)

export const ExternalidcategoryEditCard = ({ externalidcategory, children, label=""}) => {
    return (       
        <ExternalidcategoryCardCapsule externalidcategory={ externalidcategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidcategory } attributeName="id" label="Id" asyncUpdater={ ExternalidcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidcategory } attributeName="name" label="Name" asyncUpdater={ ExternalidcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidcategory } attributeName="nameen" label="Nameen" asyncUpdater={ ExternalidcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidcategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ ExternalidcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidcategory } attributeName="created" label="Created" asyncUpdater={ ExternalidcategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ExternalidcategoryCardCapsule>
    )
}
