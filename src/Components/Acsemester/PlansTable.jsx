// field plans
// targeting to Plan
// going from Acsemester
import { PlansTable } from "../Plan/PlansTable";
import { PlanLoadMoreButton } from "../Plan/PlanLoadMoreButton";

export const AcsemesterPlansTableCard = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlansTable plan={ acsemester?.plans } {...props}>
            <PlanLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </PlansTable>
    )
}