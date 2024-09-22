// field lessons
// targeting to PlannedLesson
// going from Plan
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
import { PlannedlessonLoadMoreButton } from "../Plannedlesson/PlannedlessonLoadMoreButton";

export const PlanLessonsTableCard = ({ plan, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonsTable plannedlesson={ plan?.lessons } {...props}>
            <PlannedlessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlannedlessonsTable>
    )
}