import { useParams } from "react-router-dom"

import { ProjecttypeLazy as Lazy } from "../../Components/Projecttype/ProjecttypeLazy";
import { ProjecttypeLargeCard as LargeCard } from "../../Components/Projecttype/ProjecttypeLargeCard";
import { ProjecttypeCardCapsule as CardCapsule } from "../../Components/Projecttype/ProjecttypeCardCapsule";
import { ProjecttypeEditCard as EditCard } from "../../Components/Projecttype/ProjecttypeEditCard";

import { 
    ProjecttypePageQueryAction as QueryAction,
    ProjecttypePageQueryActionValidator as QueryActionValidator
} from "./ProjecttypePageQueryAction";

import { ProjectsTable as ProjectsTable9 } from '../../Components/Project/ProjectsTable';

export const ProjecttypeEditPageContentBase = ({ projecttype, children}) => {
    return (
        <LargeCard projecttype={ projecttype }>
            {/* other data */}
            <EditCard projecttype={ projecttype }/>
        </LargeCard>        
    );    
}

const ProjecttypeLazyEditPageContent = Lazy(ProjecttypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const ProjecttypeEditPage = () => {
    const params = useParams()
    return (<ProjecttypeLazyEditPageContent {...params} />)

}
