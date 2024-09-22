// field subgroups
// targeting to Group
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { GroupsTable } from "../Group/GroupsTable";
export const GroupSubgroupsTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <GroupsTable groups={ group?.subgroups } {...props}>
            </GroupsTable>
        </GroupCardCapsule>
    )
}