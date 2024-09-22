// field project
// targeting to Project
// going from Finance
import { ProjectMediumCard } from "../Project/ProjectMediumCard";

export const FinanceProjectMediumCard = ({ finance , ...props}) => {
    return (
        <ProjectMediumCard project={ finance?.project } {...props} />
    )
}