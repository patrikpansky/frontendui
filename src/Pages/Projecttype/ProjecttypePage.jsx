import { useParams } from "react-router-dom"

import { ProjecttypeLazy as Lazy } from "../../Components/Projecttype/ProjecttypeLazy";
import { ProjecttypeLargeCard as LargeCard } from "../../Components/Projecttype/ProjecttypeLargeCard";
import { ProjecttypeCardCapsule as CardCapsule } from "../../Components/Projecttype/ProjecttypeCardCapsule";

import { 
    ProjecttypePageQueryAction as QueryAction,
    ProjecttypePageQueryActionValidator as QueryActionValidator
} from "./ProjecttypePageQueryAction";

import { ProjectsTable as ProjectsTable9 } from '../../Components/Project/ProjectsTable';

export const ProjecttypePageContentBase = ({ projecttype, children}) => {
    return (
        <LargeCard projecttype={ projecttype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const ProjecttypePageContent = ({ projecttype }) => {

        return (
            <ProjecttypePageContentBase projecttype={ projecttype }>
                {/* other data */}
                { projecttype?.projects?
                    <CardCapsule projecttype={ projecttype } label={ "projects" }>
                        <ProjectsTable9 projects={ projecttype?.projects || []}/>
                    </CardCapsule>:null
                }
            </ProjecttypePageContentBase>        
        );    
}

const ProjecttypeLazyPageContent = Lazy(ProjecttypePageContent)(QueryAction, QueryActionValidator)

export const ProjecttypePage = () => {
    const params = useParams()
    return (<ProjecttypeLazyPageContent {...params} />)

}
