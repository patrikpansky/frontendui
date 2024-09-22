import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { infoCardCapsule } from './infoCardCapsule';

export const infoEditCardMutation = `
mutation infoEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: pageinfoUpdate(pageinfo: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: pageinfo {
            __typename
            after
            before
            first
            last
            hasNextPage
        }
    }
}`

const infoUpdateAsyncAction = CreateAsyncActionFromMutation(infoEditCardMutation)

export const infoEditCard = ({ pageinfo, children, label=""}) => {
    return (       
        <infoCardCapsule pageinfo={ pageinfo } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ pageinfo } attributeName="after" label="After" asyncUpdater={ infoUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ pageinfo } attributeName="before" label="Before" asyncUpdater={ infoUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ pageinfo } attributeName="first" label="First" asyncUpdater={ infoUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ pageinfo } attributeName="last" label="Last" asyncUpdater={ infoUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ pageinfo } attributeName="hasnextpage" label="Hasnextpage" asyncUpdater={ infoUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </infoCardCapsule>
    )
}
