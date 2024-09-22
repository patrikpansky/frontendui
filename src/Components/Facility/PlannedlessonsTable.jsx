// field plannedlessons
// targeting to PlannedLesson
// going from Facility
import { PlannedlessonsTable } from "../Plannedlesson/PlannedlessonsTable";
import { PlannedlessonLoadMoreButton } from "../Plannedlesson/PlannedlessonLoadMoreButton";

export const FacilityPlannedlessonsTableCard = ({ facility, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonsTable plannedlesson={ facility?.plannedlessons } {...props}>
            <PlannedlessonLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlannedlessonsTable>
    )
}