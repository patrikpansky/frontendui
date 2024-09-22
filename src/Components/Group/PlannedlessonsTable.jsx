// field plannedlessons
// targeting to PlannedLesson
// going from Group
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
import { PlannedlessonLoadMoreButton } from "../Plannedlesson/PlannedlessonLoadMoreButton";

export const GroupPlannedlessonsTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonsTable plannedlesson={ group?.plannedlessons } {...props}>
            <PlannedlessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlannedlessonsTable>
    )
}