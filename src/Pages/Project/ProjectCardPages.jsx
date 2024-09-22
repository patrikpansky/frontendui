import { useParams } from "react-router-dom"

import { ProjectLargeCard as LargeCard } from "../../Components/Project/ProjectLargeCard";
import { ProjectCardCapsule as CardCapsule } from "../../Components/Project/ProjectCardCapsule";
import { 
    ProjectLazy as Lazy,
} from "../../Components/Project/ProjectLazy";

import { 
    ProjectPageQueryAction as QueryAction,
    ProjectPageQueryActionValidator as QueryActionValidator
} from "./ProjectPageQueryAction";

// import { FinancesCards as FinancessCards11 } from '../../Components/Finance/FinancesCards';
import { ProjectFinancesCardOfCards as FinancesCards11 } from '../../Components/Project/FinancesCardOfCards';
// import { MilestonesCards as MilestonessCards12 } from '../../Components/Milestone/MilestonesCards';
import { ProjectMilestonesCardOfCards as MilestonesCards12 } from '../../Components/Project/MilestonesCardOfCards';

export const ProjectFinancesPageContent = ({ project }) => {
    return (
        <LargeCard project={ project }>
            {/* other data */}
            { project?.finances?
                <FinancesCards11 project={ project }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const ProjectMilestonesPageContent = ({ project }) => {
    return (
        <LargeCard project={ project }>
            {/* other data */}
            { project?.milestones?
                <MilestonesCards12 project={ project }/>
                :null 
            }
        </LargeCard>        
    );    
}

const ProjectFinancesLazyPageContent = Lazy(ProjectFinancesPageContent)(QueryAction, QueryActionValidator)
export const ProjectFinancesCardPage = () => {
    const params = useParams()
    return (<ProjectFinancesLazyPageContent {...params} />)
}

const ProjectMilestonesLazyPageContent = Lazy(ProjectMilestonesPageContent)(QueryAction, QueryActionValidator)
export const ProjectMilestonesCardPage = () => {
    const params = useParams()
    return (<ProjectMilestonesLazyPageContent {...params} />)
}

