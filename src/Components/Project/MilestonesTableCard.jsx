// field milestones
// targeting to Milestone
// going from Project
import { ProjectCardCapsule } from "./ProjectCardCapsule";
import { MilestonesTable } from "../Milestone/MilestonesTable";
export const ProjectMilestonesTableCard = ({ project , ...props}) => {
    return (
        <ProjectCardCapsule project={ project } >
            <MilestonesTable milestones={ project?.milestones } {...props}>
            </MilestonesTable>
        </ProjectCardCapsule>
    )
}