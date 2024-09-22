// field project
// targeting to Project
// going from Statementofwork
import { ProjectMediumCard } from "../Project/ProjectMediumCard";

export const StatementofworkProjectMediumCard = ({ statementofwork , ...props}) => {
    return (
        <ProjectMediumCard project={ statementofwork?.project } {...props} />
    )
}