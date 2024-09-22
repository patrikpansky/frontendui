import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinancecategoryCardCapsule } from './FinancecategoryCardCapsule';

export const FinancecategoryEditCardMutation = `
mutation FinancecategoryEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: financecategoryUpdate(financecategory: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: financecategory {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const FinancecategoryUpdateAsyncAction = CreateAsyncActionFromMutation(FinancecategoryEditCardMutation)

export const FinancecategoryEditCard = ({ financecategory, children, label=""}) => {
    return (       
        <FinancecategoryCardCapsule financecategory={ financecategory } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ financecategory } attributeName="id" label="Id" asyncUpdater={ FinancecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financecategory } attributeName="name" label="Name" asyncUpdater={ FinancecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financecategory } attributeName="nameen" label="Nameen" asyncUpdater={ FinancecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financecategory } attributeName="lastchange" label="Lastchange" asyncUpdater={ FinancecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ financecategory } attributeName="created" label="Created" asyncUpdater={ FinancecategoryUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FinancecategoryCardCapsule>
    )
}
