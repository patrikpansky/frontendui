import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ExternalidtypeCardCapsule } from './ExternalidtypeCardCapsule';

export const ExternalidtypeEditCardMutation = `
mutation ExternalidtypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: externalidtypeUpdate(externalidtype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: externalidtype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const ExternalidtypeUpdateAsyncAction = CreateAsyncActionFromMutation(ExternalidtypeEditCardMutation)

export const ExternalidtypeEditCard = ({ externalidtype, children, label=""}) => {
    return (       
        <ExternalidtypeCardCapsule externalidtype={ externalidtype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidtype } attributeName="id" label="Id" asyncUpdater={ ExternalidtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidtype } attributeName="name" label="Name" asyncUpdater={ ExternalidtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidtype } attributeName="nameen" label="Nameen" asyncUpdater={ ExternalidtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidtype } attributeName="lastchange" label="Lastchange" asyncUpdater={ ExternalidtypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ externalidtype } attributeName="created" label="Created" asyncUpdater={ ExternalidtypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </ExternalidtypeCardCapsule>
    )
}
