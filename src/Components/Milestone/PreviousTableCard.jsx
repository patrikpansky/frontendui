// field previous
// targeting to Milestone
// going from Milestone
import { MilestoneCardCapsule } from "./MilestoneCardCapsule";
import { MilestonesTable } from "../Milestone/MilestonesTable";
export const MilestonePreviousTableCard = ({ milestone , ...props}) => {
    return (
        <MilestoneCardCapsule milestone={ milestone } >
            <MilestonesTable milestones={ milestone?.previous } {...props}>
            </MilestonesTable>
        </MilestoneCardCapsule>
    )
}