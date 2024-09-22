// field presences
// targeting to Presence
// going from User
import { PresencesTable } from "../Presence/PresencesTable";
import { PresenceLoadMoreButton } from "../Presence/PresenceLoadMoreButton";

export const UserPresencesTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PresencesTable presence={ user?.presences } {...props}>
            <PresenceLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PresencesTable>
    )
}