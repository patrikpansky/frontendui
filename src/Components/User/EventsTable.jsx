// field events
// targeting to Event
// going from User
import { EventsTable } from "../Event/EventsTable";
import { EventLoadMoreButton } from "../Event/EventLoadMoreButton";

export const UserEventsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventsTable event={ user?.events } {...props}>
            <EventLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </EventsTable>
    )
}