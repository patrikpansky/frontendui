/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UpdateEventAsyncAction } from '../../Queries/UpdateEventAsyncAction'


export const EventEditCard = ({event}) => {
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>           
            <Row>
                <Col>
                    <EditableAttributeText item={event} attributeName="name" label="Název" asyncUpdater={UpdateEventAsyncAction} />
                </Col>
            </Row>
        </CardCapsule>
    )
}
