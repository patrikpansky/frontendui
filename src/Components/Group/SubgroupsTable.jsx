// field subgroups
// targeting to Group
// going from Group
import { GroupsTable } from "../Group/GroupsTable";
import { GroupLoadMoreButton } from "../Group/GroupLoadMoreButton";

export const GroupSubgroupsTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupsTable group={ group?.subgroups } {...props}>
            <GroupLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </GroupsTable>
    )
}