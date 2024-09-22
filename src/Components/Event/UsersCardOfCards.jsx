// field users
// targeting to User
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { UsersCards } from "../User/UsersCards";
import { EventUsersLoadMoreButton as LoadMoreButton} from "../Event/UsersLoadMoreButton";

export const EventUsersCardOfCards = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventCardCapsule event={ event } label={"Users"}>
            <UsersCards users={ event?.users } {...props} >
                <LoadMoreButton event={ event } skip={skip} limit={limit} orderby={orderby} where={where} />
            </UsersCards>
        </EventCardCapsule>
    )
}