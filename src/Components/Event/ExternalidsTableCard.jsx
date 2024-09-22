// field externalids
// targeting to ExternalId
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
export const EventExternalidsTableCard = ({ event , ...props}) => {
    return (
        <EventCardCapsule event={ event } >
            <ExternalidsTable externalids={ event?.externalids } {...props}>
            </ExternalidsTable>
        </EventCardCapsule>
    )
}