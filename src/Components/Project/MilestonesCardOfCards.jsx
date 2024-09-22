// field milestones
// targeting to Milestone
// going from Project
import { ProjectCardCapsule } from "./ProjectCardCapsule";
import { MilestonesCards } from "../Milestone/MilestonesCards";
import { ProjectMilestonesLoadMoreButton as LoadMoreButton} from "../Project/MilestonesLoadMoreButton";

export const ProjectMilestonesCardOfCards = ({ project, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ProjectCardCapsule project={ project } label={"Milestones"}>
            <MilestonesCards milestones={ project?.milestones } {...props} >
                <LoadMoreButton project={ project } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MilestonesCards>
        </ProjectCardCapsule>
    )
}