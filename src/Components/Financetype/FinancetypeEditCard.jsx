import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancetypeCardCapsule } from './FinancetypeCardCapsule';

export const FinancetypeEditCardMutation = `
mutation FinancetypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: financetypeUpdate(financetype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: financetype {
            __typename
            id
            name
            nameEn
            lastchange
            created
            valid
        }
    }
}`

const FinancetypeUpdateAsyncAction = CreateAsyncActionFromMutation(FinancetypeEditCardMutation)

export const FinancetypeEditCard = ({ financetype, children, label=""}) => {
    return (       
        <FinancetypeCardCapsule financetype={ financetype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="id" label="Id" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="name" label="Name" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="nameen" label="Nameen" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="lastchange" label="Lastchange" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="created" label="Created" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financetype } attributeName="valid" label="Valid" asyncUpdater={ FinancetypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FinancetypeCardCapsule>
    )
}
