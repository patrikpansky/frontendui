// field finances
// targeting to Finance
// going from Project
import { ProjectCardCapsule } from "./ProjectCardCapsule";
import { FinancesTable } from "../Finance/FinancesTable";
export const ProjectFinancesTableCard = ({ project , ...props}) => {
    return (
        <ProjectCardCapsule project={ project } >
            <FinancesTable finances={ project?.finances } {...props}>
            </FinancesTable>
        </ProjectCardCapsule>
    )
}