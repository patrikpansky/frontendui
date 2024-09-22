// field groups
// targeting to Group
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { GroupsTable } from "../Group/GroupsTable";
export const PlannedlessonGroupsTableCard = ({ plannedlesson , ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } >
            <GroupsTable groups={ plannedlesson?.groups } {...props}>
            </GroupsTable>
        </PlannedlessonCardCapsule>
    )
}