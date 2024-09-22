// field finances
// targeting to Finance
// going from Project
import { ProjectCardCapsule } from "./ProjectCardCapsule";
import { FinancesCards } from "../Finance/FinancesCards";
import { ProjectFinancesLoadMoreButton as LoadMoreButton} from "../Project/FinancesLoadMoreButton";

export const ProjectFinancesCardOfCards = ({ project, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <ProjectCardCapsule project={ project } label={"Finances"}>
            <FinancesCards finances={ project?.finances } {...props} >
                <LoadMoreButton project={ project } skip={skip} limit={limit} orderby={orderby} where={where} />
            </FinancesCards>
        </ProjectCardCapsule>
    )
}