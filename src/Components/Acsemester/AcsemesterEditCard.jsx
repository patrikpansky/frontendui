import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsemesterCardCapsule } from './AcsemesterCardCapsule';

export const AcsemesterEditCardMutation = `
mutation AcsemesterEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: acsemesterUpdate(acsemester: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: acsemester {
            __typename
            id
            created
            lastchange
            order
        }
    }
}`

const AcsemesterUpdateAsyncAction = CreateAsyncActionFromMutation(AcsemesterEditCardMutation)

export const AcsemesterEditCard = ({ acsemester, children, label=""}) => {
    return (       
        <AcsemesterCardCapsule acsemester={ acsemester } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ acsemester } attributeName="id" label="Id" asyncUpdater={ AcsemesterUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsemester } attributeName="created" label="Created" asyncUpdater={ AcsemesterUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsemester } attributeName="lastchange" label="Lastchange" asyncUpdater={ AcsemesterUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ acsemester } attributeName="order" label="Order" asyncUpdater={ AcsemesterUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </AcsemesterCardCapsule>
    )
}
