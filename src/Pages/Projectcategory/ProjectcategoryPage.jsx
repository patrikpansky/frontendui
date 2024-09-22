import { useParams } from "react-router-dom"

import { ProjectcategoryLazy as Lazy } from "../../Components/Projectcategory/ProjectcategoryLazy";
import { ProjectcategoryLargeCard as LargeCard } from "../../Components/Projectcategory/ProjectcategoryLargeCard";
import { ProjectcategoryCardCapsule as CardCapsule } from "../../Components/Projectcategory/ProjectcategoryCardCapsule";

import { 
    ProjectcategoryPageQueryAction as QueryAction,
    ProjectcategoryPageQueryActionValidator as QueryActionValidator
} from "./ProjectcategoryPageQueryAction";


export const ProjectcategoryPageContentBase = ({ projectcategory, children}) => {
    return (
        <LargeCard projectcategory={ projectcategory }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const ProjectcategoryPageContent = ({ projectcategory }) => {

        return (
            <ProjectcategoryPageContentBase projectcategory={ projectcategory }>
                {/* other data */}
            </ProjectcategoryPageContentBase>        
        );    
}

const ProjectcategoryLazyPageContent = Lazy(ProjectcategoryPageContent)(QueryAction, QueryActionValidator)

export const ProjectcategoryPage = () => {
    const params = useParams()
    return (<ProjectcategoryLazyPageContent {...params} />)

}
