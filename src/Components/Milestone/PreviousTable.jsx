// field previous
// targeting to Milestone
// going from Milestone
import { MilestonesTable } from "../Milestone/MilestonesTable";
import { MilestoneLoadMoreButton } from "../Milestone/MilestoneLoadMoreButton";

export const MilestonePreviousTableCard = ({ milestone, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MilestonesTable milestone={ milestone?.previous } {...props}>
            <MilestoneLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </MilestonesTable>
    )
}