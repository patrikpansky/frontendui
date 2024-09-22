// field events
// targeting to Event
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { EventsTable } from "../Event/EventsTable";
export const UserEventsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <EventsTable events={ user?.events } {...props}>
            </EventsTable>
        </UserCardCapsule>
    )
}