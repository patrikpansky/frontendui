import { useParams } from "react-router-dom"

import { ProjecttypeLargeCard as LargeCard } from "../../Components/Projecttype/ProjecttypeLargeCard";
import { ProjecttypeCardCapsule as CardCapsule } from "../../Components/Projecttype/ProjecttypeCardCapsule";
import { 
    ProjecttypeLazy as Lazy,
} from "../../Components/Projecttype/ProjecttypeLazy";

import { 
    ProjecttypePageQueryAction as QueryAction,
    ProjecttypePageQueryActionValidator as QueryActionValidator
} from "./ProjecttypePageQueryAction";

// import { ProjectsCards as ProjectssCards9 } from '../../Components/Project/ProjectsCards';
import { ProjecttypeProjectsCardOfCards as ProjectsCards9 } from '../../Components/Projecttype/ProjectsCardOfCards';

export const ProjecttypeProjectsPageContent = ({ projecttype }) => {
    return (
        <LargeCard projecttype={ projecttype }>
            {/* other data */}
            { projecttype?.projects?
                <ProjectsCards9 projecttype={ projecttype }/>
                :null 
            }
        </LargeCard>        
    );    
}

const ProjecttypeProjectsLazyPageContent = Lazy(ProjecttypeProjectsPageContent)(QueryAction, QueryActionValidator)
export const ProjecttypeProjectsCardPage = () => {
    const params = useParams()
    return (<ProjecttypeProjectsLazyPageContent {...params} />)
}

