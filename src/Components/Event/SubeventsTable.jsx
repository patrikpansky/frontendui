// field subevents
// targeting to Event
// going from Event
import { EventsTable } from "../Event/EventsTable";
import { EventLoadMoreButton } from "../Event/EventLoadMoreButton";

export const EventSubeventsTableCard = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventsTable event={ event?.subevents } {...props}>
            <EventLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </EventsTable>
    )
}