// field presences
// targeting to Presence
// going from Event
import { PresencesTable } from "../Presence/PresencesTable";
import { PresenceLoadMoreButton } from "../Presence/PresenceLoadMoreButton";

export const EventPresencesTableCard = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PresencesTable presence={ event?.presences } {...props}>
            <PresenceLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PresencesTable>
    )
}