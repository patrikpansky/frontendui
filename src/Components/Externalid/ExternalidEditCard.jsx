import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidCardCapsule } from './ExternalidCardCapsule';

export const ExternalidEditCardMutation = `
mutation ExternalidEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: externalidUpdate(externalid: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: externalid {
            __typename
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
    }
}`

const ExternalidUpdateAsyncAction = CreateAsyncActionFromMutation(ExternalidEditCardMutation)

export const ExternalidEditCard = ({ externalid, children, label=""}) => {
    return (       
        <ExternalidCardCapsule externalid={ externalid } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="id" label="Id" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="lastchange" label="Lastchange" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="created" label="Created" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="innerid" label="Innerid" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="outerid" label="Outerid" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="typename" label="Typename" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalid } attributeName="link" label="Link" asyncUpdater={ ExternalidUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ExternalidCardCapsule>
    )
}
