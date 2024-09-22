// field events
// targeting to Event
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { EventsCards } from "../Event/EventsCards";
import { UserEventsLoadMoreButton as LoadMoreButton} from "../User/EventsLoadMoreButton";

export const UserEventsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Events"}>
            <EventsCards events={ user?.events } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </EventsCards>
        </UserCardCapsule>
    )
}