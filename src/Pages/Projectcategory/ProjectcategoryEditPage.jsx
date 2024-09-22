import { useParams } from "react-router-dom"

import { ProjectcategoryLazy as Lazy } from "../../Components/Projectcategory/ProjectcategoryLazy";
import { ProjectcategoryLargeCard as LargeCard } from "../../Components/Projectcategory/ProjectcategoryLargeCard";
import { ProjectcategoryCardCapsule as CardCapsule } from "../../Components/Projectcategory/ProjectcategoryCardCapsule";
import { ProjectcategoryEditCard as EditCard } from "../../Components/Projectcategory/ProjectcategoryEditCard";

import { 
    ProjectcategoryPageQueryAction as QueryAction,
    ProjectcategoryPageQueryActionValidator as QueryActionValidator
} from "./ProjectcategoryPageQueryAction";


export const ProjectcategoryEditPageContentBase = ({ projectcategory, children}) => {
    return (
        <LargeCard projectcategory={ projectcategory }>
            {/* other data */}
            <EditCard projectcategory={ projectcategory }/>
        </LargeCard>        
    );    
}

const ProjectcategoryLazyEditPageContent = Lazy(ProjectcategoryEditPageContentBase)(QueryAction, QueryActionValidator)

export const ProjectcategoryEditPage = () => {
    const params = useParams()
    return (<ProjectcategoryLazyEditPageContent {...params} />)

}
