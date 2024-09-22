// field projecttype
// targeting to ProjectType
// going from Project
import { ProjecttypeMediumCard } from "../Projecttype/ProjecttypeMediumCard";

export const ProjectProjecttypeMediumCard = ({ project , ...props}) => {
    return (
        <ProjecttypeMediumCard projecttype={ project?.projecttype } {...props} />
    )
}