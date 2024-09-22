import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FinanceCardCapsule } from './FinanceCardCapsule';

export const FinanceEditCardMutation = `
mutation FinanceEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: financeUpdate(finance: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: finance {
            __typename
            id
            name
            amount
            lastchange
            created
            valid
        }
    }
}`

const FinanceUpdateAsyncAction = CreateAsyncActionFromMutation(FinanceEditCardMutation)

export const FinanceEditCard = ({ finance, children, label=""}) => {
    return (       
        <FinanceCardCapsule finance={ finance } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="id" label="Id" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="name" label="Name" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="amount" label="Amount" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="lastchange" label="Lastchange" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="created" label="Created" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ finance } attributeName="valid" label="Valid" asyncUpdater={ FinanceUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FinanceCardCapsule>
    )
}
