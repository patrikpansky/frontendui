// field lessons
// targeting to PlannedLesson
// going from Plan
import { PlanCardCapsule } from "./PlanCardCapsule";
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
export const PlanLessonsTableCard = ({ plan , ...props}) => {
    return (
        <PlanCardCapsule plan={ plan } >
            <PlannedlessonsTable plannedlessons={ plan?.lessons } {...props}>
            </PlannedlessonsTable>
        </PlanCardCapsule>
    )
}