import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsubjectCardCapsule } from './AcsubjectCardCapsule';

export const AcsubjectEditCardMutation = `
mutation AcsubjectEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acsubjectUpdate(acsubject: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acsubject {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcsubjectUpdateAsyncAction = CreateAsyncActionFromMutation(AcsubjectEditCardMutation)

export const AcsubjectEditCard = ({ acsubject, children, label=""}) => {
    return (       
        <AcsubjectCardCapsule acsubject={ acsubject } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acsubject } attributeName="id" label="Id" asyncUpdater={ AcsubjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsubject } attributeName="name" label="Name" asyncUpdater={ AcsubjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsubject } attributeName="nameen" label="Nameen" asyncUpdater={ AcsubjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsubject } attributeName="created" label="Created" asyncUpdater={ AcsubjectUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsubject } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcsubjectUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcsubjectCardCapsule>
    )
}
