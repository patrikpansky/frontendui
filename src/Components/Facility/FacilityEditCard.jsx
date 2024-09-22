import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import { CreateAsyncActionFromMutation } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FacilityCardCapsule } from './FacilityCardCapsule';

export const FacilityEditCardMutation = `
mutation FacilityEditCardMutation($id: UUID!, $lastchange: DateTime!, $name: String) {
    result: facilityUpdate(facility: {id: $id, lastchange: $lastchange, name: $name}) {
        id
        msg
        result: facility {
            __typename
            id
            name
            nameEn
            lastchange
            created
            label
            address
            valid
            capacity
            geometry
            geolocation
        }
    }
}`

const FacilityUpdateAsyncAction = CreateAsyncActionFromMutation(FacilityEditCardMutation)

export const FacilityEditCard = ({ facility, children, label=""}) => {
    return (       
        <FacilityCardCapsule facility={ facility } label={label} >
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="id" label="Id" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="name" label="Name" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="nameen" label="Nameen" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="lastchange" label="Lastchange" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="created" label="Created" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="label" label="Label" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="address" label="Address" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="valid" label="Valid" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="capacity" label="Capacity" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="geometry" label="Geometry" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableAttributeText item={ facility } attributeName="geolocation" label="Geolocation" asyncUpdater={ FacilityUpdateAsyncAction } />
                </Col>
            </Row>
            {children}
        </FacilityCardCapsule>
    )
}
