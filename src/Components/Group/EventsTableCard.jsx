// field events
// targeting to Event
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { EventsTable } from "../Event/EventsTable";
export const GroupEventsTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <EventsTable events={ group?.events } {...props}>
            </EventsTable>
        </GroupCardCapsule>
    )
}