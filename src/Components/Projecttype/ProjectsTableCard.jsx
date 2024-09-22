// field projects
// targeting to Project
// going from Projecttype
import { ProjecttypeCardCapsule } from "./ProjecttypeCardCapsule";
import { ProjectsTable } from "../Project/ProjectsTable";
export const ProjecttypeProjectsTableCard = ({ projecttype , ...props}) => {
    return (
        <ProjecttypeCardCapsule projecttype={ projecttype } >
            <ProjectsTable projects={ projecttype?.projects } {...props}>
            </ProjectsTable>
        </ProjecttypeCardCapsule>
    )
}