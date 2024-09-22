// field users
// targeting to User
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { UsersTable } from "../User/UsersTable";
export const EventUsersTableCard = ({ event , ...props}) => {
    return (
        <EventCardCapsule event={ event } >
            <UsersTable users={ event?.users } {...props}>
            </UsersTable>
        </EventCardCapsule>
    )
}