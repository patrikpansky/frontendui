import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtitletypeCardCapsule } from './AcprogramtitletypeCardCapsule';

export const AcprogramtitletypeEditCardMutation = `
mutation AcprogramtitletypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acprogramtitletypeUpdate(acprogramtitletype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acprogramtitletype {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
}`

const AcprogramtitletypeUpdateAsyncAction = CreateAsyncActionFromMutation(AcprogramtitletypeEditCardMutation)

export const AcprogramtitletypeEditCard = ({ acprogramtitletype, children, label=""}) => {
    return (       
        <AcprogramtitletypeCardCapsule acprogramtitletype={ acprogramtitletype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtitletype } attributeName="id" label="Id" asyncUpdater={ AcprogramtitletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtitletype } attributeName="name" label="Name" asyncUpdater={ AcprogramtitletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtitletype } attributeName="nameen" label="Nameen" asyncUpdater={ AcprogramtitletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtitletype } attributeName="created" label="Created" asyncUpdater={ AcprogramtitletypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acprogramtitletype } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcprogramtitletypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcprogramtitletypeCardCapsule>
    )
}
