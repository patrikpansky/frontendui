import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { StatementofworkCardCapsule } from './StatementofworkCardCapsule';

export const StatementofworkEditCardMutation = `
mutation StatementofworkEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: statementofworkUpdate(statementofwork: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: statementofwork {
            __typename
            id
            lastchange
            startdate
            enddate
            created
            valid
        }
    }
}`

const StatementofworkUpdateAsyncAction = CreateAsyncActionFromMutation(StatementofworkEditCardMutation)

export const StatementofworkEditCard = ({ statementofwork, children, label=""}) => {
    return (       
        <StatementofworkCardCapsule statementofwork={ statementofwork } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="id" label="Id" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="lastchange" label="Lastchange" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="startdate" label="Startdate" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="enddate" label="Enddate" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="created" label="Created" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ statementofwork } attributeName="valid" label="Valid" asyncUpdater={ StatementofworkUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </StatementofworkCardCapsule>
    )
}
