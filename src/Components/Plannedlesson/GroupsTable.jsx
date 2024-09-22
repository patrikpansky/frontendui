// field groups
// targeting to Group
// going from Plannedlesson
import { GroupsTable } from "../Group/GroupsTable";
import { GroupLoadMoreButton } from "../Group/GroupLoadMoreButton";

export const PlannedlessonGroupsTableCard = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupsTable group={ plannedlesson?.groups } {...props}>
            <GroupLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GroupsTable>
    )
}