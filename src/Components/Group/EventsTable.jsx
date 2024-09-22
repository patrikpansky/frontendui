// field events
// targeting to Event
// going from Group
import { EventsTable } from "../Event/EventsTable";
import { EventLoadMoreButton } from "../Event/EventLoadMoreButton";

export const GroupEventsTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventsTable event={ group?.events } {...props}>
            <EventLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </EventsTable>
    )
}