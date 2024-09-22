// field linkedwith
// targeting to PlannedLesson
// going from Plannedlesson
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
import { PlannedlessonLoadMoreButton } from "../Plannedlesson/PlannedlessonLoadMoreButton";

export const PlannedlessonLinkedwithTableCard = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonsTable plannedlesson={ plannedlesson?.linkedwith } {...props}>
            <PlannedlessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlannedlessonsTable>
    )
}