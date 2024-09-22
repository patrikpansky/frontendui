// field subevents
// targeting to Event
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { EventsCards } from "../Event/EventsCards";
import { EventSubeventsLoadMoreButton as LoadMoreButton} from "../Event/SubeventsLoadMoreButton";

export const EventSubeventsCardOfCards = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventCardCapsule event={ event } label={"Subevents"}>
            <EventsCards events={ event?.subevents } {...props} >
                <LoadMoreButton event={ event } skip={skip} limit={limit} orderby={orderby} where={where} />
            </EventsCards>
        </EventCardCapsule>
    )
}