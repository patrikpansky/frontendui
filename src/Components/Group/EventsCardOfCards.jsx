// field events
// targeting to Event
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { EventsCards } from "../Event/EventsCards";
import { GroupEventsLoadMoreButton as LoadMoreButton} from "../Group/EventsLoadMoreButton";

export const GroupEventsCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Events"}>
            <EventsCards events={ group?.events } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </EventsCards>
        </GroupCardCapsule>
    )
}