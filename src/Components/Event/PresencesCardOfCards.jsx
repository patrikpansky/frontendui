// field presences
// targeting to Presence
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { PresencesCards } from "../Presence/PresencesCards";
import { EventPresencesLoadMoreButton as LoadMoreButton} from "../Event/PresencesLoadMoreButton";

export const EventPresencesCardOfCards = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventCardCapsule event={ event } label={"Presences"}>
            <PresencesCards presences={ event?.presences } {...props} >
                <LoadMoreButton event={ event } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PresencesCards>
        </EventCardCapsule>
    )
}