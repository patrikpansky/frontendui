// field projects
// targeting to Project
// going from Projecttype
import { ProjectsTable } from "../Project/ProjectsTable";
import { ProjectLoadMoreButton } from "../Project/ProjectLoadMoreButton";

export const ProjecttypeProjectsTableCard = ({ projecttype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ProjectsTable project={ projecttype?.projects } {...props}>
            <ProjectLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </ProjectsTable>
    )
}