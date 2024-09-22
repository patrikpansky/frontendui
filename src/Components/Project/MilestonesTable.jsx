// field milestones
// targeting to Milestone
// going from Project
import { MilestonesTable } from "../Milestone/MilestonesTable";
import { MilestoneLoadMoreButton } from "../Milestone/MilestoneLoadMoreButton";

export const ProjectMilestonesTableCard = ({ project, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MilestonesTable milestone={ project?.milestones } {...props}>
            <MilestoneLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </MilestonesTable>
    )
}