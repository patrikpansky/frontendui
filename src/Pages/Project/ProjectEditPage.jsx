import { useParams } from "react-router-dom"

import { ProjectLazy as Lazy } from "../../Components/Project/ProjectLazy";
import { ProjectLargeCard as LargeCard } from "../../Components/Project/ProjectLargeCard";
import { ProjectCardCapsule as CardCapsule } from "../../Components/Project/ProjectCardCapsule";
import { ProjectEditCard as EditCard } from "../../Components/Project/ProjectEditCard";

import { 
    ProjectPageQueryAction as QueryAction,
    ProjectPageQueryActionValidator as QueryActionValidator
} from "./ProjectPageQueryAction";

import { FinancesTable as FinancesTable11 } from '../../Components/Finance/FinancesTable';
import { MilestonesTable as MilestonesTable12 } from '../../Components/Milestone/MilestonesTable';

export const ProjectEditPageContentBase = ({ project, children}) => {
    return (
        <LargeCard project={ project }>
            {/* other data */}
            <EditCard project={ project }/>
        </LargeCard>        
    );    
}

const ProjectLazyEditPageContent = Lazy(ProjectEditPageContentBase)(QueryAction, QueryActionValidator)

export const ProjectEditPage = () => {
    const params = useParams()
    return (<ProjectLazyEditPageContent {...params} />)

}
