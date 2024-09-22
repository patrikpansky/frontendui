// field externalids
// targeting to ExternalId
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { ExternalidsCards } from "../Externalid/ExternalidsCards";
import { EventExternalidsLoadMoreButton as LoadMoreButton} from "../Event/ExternalidsLoadMoreButton";

export const EventExternalidsCardOfCards = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventCardCapsule event={ event } label={"Externalids"}>
            <ExternalidsCards externalids={ event?.externalids } {...props} >
                <LoadMoreButton event={ event } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ExternalidsCards>
        </EventCardCapsule>
    )
}