// field groups
// targeting to Group
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { GroupsTable } from "../Group/GroupsTable";
export const EventGroupsTableCard = ({ event , ...props}) => {
    return (
        <EventCardCapsule event={ event } >
            <GroupsTable groups={ event?.groups } {...props}>
            </GroupsTable>
        </EventCardCapsule>
    )
}