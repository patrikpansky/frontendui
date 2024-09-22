// field subevents
// targeting to Event
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { EventsTable } from "../Event/EventsTable";
export const EventSubeventsTableCard = ({ event , ...props}) => {
    return (
        <EventCardCapsule event={ event } >
            <EventsTable events={ event?.subevents } {...props}>
            </EventsTable>
        </EventCardCapsule>
    )
}