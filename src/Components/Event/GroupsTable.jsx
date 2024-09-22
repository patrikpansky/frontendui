// field groups
// targeting to Group
// going from Event
import { GroupsTable } from "../Group/GroupsTable";
import { GroupLoadMoreButton } from "../Group/GroupLoadMoreButton";

export const EventGroupsTableCard = ({ event, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupsTable group={ event?.groups } {...props}>
            <GroupLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GroupsTable>
    )
}