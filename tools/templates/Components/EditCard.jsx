import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { {{Name name}}CardCapsule } from './{{Name name}}CardCapsule';

export const {{Name name}}EditCardMutation = `
mutation {{Name name}}EditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: {{name name}}Update({{name name}}: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: {{name name}} {
            __typename
        {{#each returnType.fields }}
        {{#if isScalar}}
            {{./name}}
        {{/if}}
        {{/each}}
        }
    }
}`

const {{Name name}}UpdateAsyncAction = CreateAsyncActionFromMutation({{Name name}}EditCardMutation)

export const {{Name name}}EditCard = ({ {{name name}}, children, label=""}) => {
    return (       
        <{{Name name}}CardCapsule {{name name}}={ {{name name}} } label={label} >
        {{#each returnType.fields }}
            {{#if isScalar}}
            <Row>
                <Col>
                    <EditableAttributeText item={ {{name ../name}} } attributeName="{{name name}}" label="{{Name name}}" asyncUpdater={ {{Name ../name}}UpdateAsyncAction } />
                </Col>
            </Row>
            {{/if}}
        {{/each}}            
            {children}
        </{{Name name}}CardCapsule>
    )
}
