// field groups
// targeting to Group
// going from Event
import { EventCardCapsule } from "./EventCardCapsule";
import { GroupsCards } from "../Group/GroupsCards";
import { EventGroupsLoadMoreButton as LoadMoreButton} from "../Event/GroupsLoadMoreButton";

export const EventGroupsCardOfCards = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <EventCardCapsule event={ event } label={"Groups"}>
            <GroupsCards groups={ event?.groups } {...props} >
                <LoadMoreButton event={ event } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GroupsCards>
        </EventCardCapsule>
    )
}