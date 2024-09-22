// field linkedwith
// targeting to PlannedLesson
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
export const PlannedlessonLinkedwithTableCard = ({ plannedlesson , ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } >
            <PlannedlessonsTable plannedlessons={ plannedlesson?.linkedwith } {...props}>
            </PlannedlessonsTable>
        </PlannedlessonCardCapsule>
    )
}