// field nexts
// targeting to Milestone
// going from Milestone
import { MilestoneCardCapsule } from "./MilestoneCardCapsule";
import { MilestonesTable } from "../Milestone/MilestonesTable";
export const MilestoneNextsTableCard = ({ milestone , ...props}) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } >
            <MilestonesTable milestones={ milestone?.nexts } {...props}>
            </MilestonesTable>
        </MilestoneCardCapsule>
    )
}