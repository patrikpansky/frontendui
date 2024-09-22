// field plannedlessons
// targeting to PlannedLesson
// going from User
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
import { PlannedlessonLoadMoreButton } from "../Plannedlesson/PlannedlessonLoadMoreButton";

export const UserPlannedlessonsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonsTable plannedlesson={ user?.plannedlessons } {...props}>
            <PlannedlessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlannedlessonsTable>
    )
}