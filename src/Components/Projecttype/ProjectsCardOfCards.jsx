// field projects
// targeting to Project
// going from Projecttype
import { ProjecttypeCardCapsule } from "./ProjecttypeCardCapsule";
import { ProjectsCards } from "../Project/ProjectsCards";
import { ProjecttypeProjectsLoadMoreButton as LoadMoreButton} from "../Projecttype/ProjectsLoadMoreButton";

export const ProjecttypeProjectsCardOfCards = ({ projecttype, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ProjecttypeCardCapsule projecttype={ projecttype } label={"Projects"}>
            <ProjectsCards projects={ projecttype?.projects } {...props} >
                <LoadMoreButton projecttype={ projecttype } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ProjectsCards>
        </ProjecttypeCardCapsule>
    )
}