import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilitytypeCardCapsule } from './FacilitytypeCardCapsule';

export const FacilitytypeEditCardMutation = `
mutation FacilitytypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: facilitytypeUpdate(facilitytype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: facilitytype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const FacilitytypeUpdateAsyncAction = CreateAsyncActionFromMutation(FacilitytypeEditCardMutation)

export const FacilitytypeEditCard = ({ facilitytype, children, label=""}) => {
    return (       
        <FacilitytypeCardCapsule facilitytype={ facilitytype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ facilitytype } attributeName="id" label="Id" asyncUpdater={ FacilitytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilitytype } attributeName="name" label="Name" asyncUpdater={ FacilitytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilitytype } attributeName="nameen" label="Nameen" asyncUpdater={ FacilitytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilitytype } attributeName="lastchange" label="Lastchange" asyncUpdater={ FacilitytypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilitytype } attributeName="created" label="Created" asyncUpdater={ FacilitytypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FacilitytypeCardCapsule>
    )
}
