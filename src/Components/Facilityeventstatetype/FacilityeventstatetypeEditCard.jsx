import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityeventstatetypeCardCapsule } from './FacilityeventstatetypeCardCapsule';

export const FacilityeventstatetypeEditCardMutation = `
mutation FacilityeventstatetypeEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: facilityeventstatetypeUpdate(facilityeventstatetype: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: facilityeventstatetype {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
}`

const FacilityeventstatetypeUpdateAsyncAction = CreateAsyncActionFromMutation(FacilityeventstatetypeEditCardMutation)

export const FacilityeventstatetypeEditCard = ({ facilityeventstatetype, children, label=""}) => {
    return (       
        <FacilityeventstatetypeCardCapsule facilityeventstatetype={ facilityeventstatetype } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ facilityeventstatetype } attributeName="id" label="Id" asyncUpdater={ FacilityeventstatetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilityeventstatetype } attributeName="name" label="Name" asyncUpdater={ FacilityeventstatetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilityeventstatetype } attributeName="nameen" label="Nameen" asyncUpdater={ FacilityeventstatetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilityeventstatetype } attributeName="lastchange" label="Lastchange" asyncUpdater={ FacilityeventstatetypeUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facilityeventstatetype } attributeName="created" label="Created" asyncUpdater={ FacilityeventstatetypeUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FacilityeventstatetypeCardCapsule>
    )
}
