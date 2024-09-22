import { useParams } from "react-router-dom"

import { ProjectLazy as Lazy } from "../../Components/Project/ProjectLazy";
import { ProjectLargeCard as LargeCard } from "../../Components/Project/ProjectLargeCard";
import { ProjectCardCapsule as CardCapsule } from "../../Components/Project/ProjectCardCapsule";

import { 
    ProjectPageQueryAction as QueryAction,
    ProjectPageQueryActionValidator as QueryActionValidator
} from "./ProjectPageQueryAction";

import { FinancesTable as FinancesTable11 } from '../../Components/Finance/FinancesTable';
import { MilestonesTable as MilestonesTable12 } from '../../Components/Milestone/MilestonesTable';

export const ProjectPageContentBase = ({ project, children}) => {
    return (
        <LargeCard project={ project }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const ProjectPageContent = ({ project }) => {

        return (
            <ProjectPageContentBase project={ project }>
                {/* other data */}
                { project?.finances?
                    <CardCapsule project={ project } label={ "finances" }>
                        <FinancesTable11 finances={ project?.finances || []}/>
                    </CardCapsule>:null
                }
                { project?.milestones?
                    <CardCapsule project={ project } label={ "milestones" }>
                        <MilestonesTable12 milestones={ project?.milestones || []}/>
                    </CardCapsule>:null
                }
            </ProjectPageContentBase>        
        );    
}

const ProjectLazyPageContent = Lazy(ProjectPageContent)(QueryAction, QueryActionValidator)

export const ProjectPage = () => {
    const params = useParams()
    return (<ProjectLazyPageContent {...params} />)

}
