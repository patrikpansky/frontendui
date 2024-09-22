// field project
// targeting to Project
// going from Milestone
import { ProjectMediumCard } from "../Project/ProjectMediumCard";

export const MilestoneProjectMediumCard = ({ milestone , ...props}) => {
    return (
        <ProjectMediumCard project={ milestone?.project } {...props} />
    )
}