import { useParams } from "react-router-dom"

import { AcsemesterLazy as Lazy } from "../../Components/Acsemester/AcsemesterLazy";
import { AcsemesterLargeCard as LargeCard } from "../../Components/Acsemester/AcsemesterLargeCard";
import { AcsemesterCardCapsule as CardCapsule } from "../../Components/Acsemester/AcsemesterCardCapsule";
import { AcsemesterEditCard as EditCard } from "../../Components/Acsemester/AcsemesterEditCard";

import { 
    AcsemesterPageQueryAction as QueryAction,
    AcsemesterPageQueryActionValidator as QueryActionValidator
} from "./AcsemesterPageQueryAction";

import { AcclassificationsTable as ClassificationsTable8 } from '../../Components/Acclassification/AcclassificationsTable';
import { ActopicsTable as TopicsTable9 } from '../../Components/Actopic/ActopicsTable';
import { PlansTable as PlansTable10 } from '../../Components/Plan/PlansTable';

export const AcsemesterEditPageContentBase = ({ acsemester, children}) => {
    return (
        <LargeCard acsemester={ acsemester }>
            {/* other data */}
            <EditCard acsemester={ acsemester }/>
        </LargeCard>        
    );    
}

const AcsemesterLazyEditPageContent = Lazy(AcsemesterEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcsemesterEditPage = () => {
    const params = useParams()
    return (<AcsemesterLazyEditPageContent {...params} />)

}
