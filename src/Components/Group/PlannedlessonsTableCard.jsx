// field plannedlessons
// targeting to PlannedLesson
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
export const GroupPlannedlessonsTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <PlannedlessonsTable plannedlessons={ group?.plannedlessons } {...props}>
            </PlannedlessonsTable>
        </GroupCardCapsule>
    )
}