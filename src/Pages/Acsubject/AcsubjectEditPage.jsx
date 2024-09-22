import { useParams } from "react-router-dom"

import { AcsubjectLazy as Lazy } from "../../Components/Acsubject/AcsubjectLazy";
import { AcsubjectLargeCard as LargeCard } from "../../Components/Acsubject/AcsubjectLargeCard";
import { AcsubjectCardCapsule as CardCapsule } from "../../Components/Acsubject/AcsubjectCardCapsule";
import { AcsubjectEditCard as EditCard } from "../../Components/Acsubject/AcsubjectEditCard";

import { 
    AcsubjectPageQueryAction as QueryAction,
    AcsubjectPageQueryActionValidator as QueryActionValidator
} from "./AcsubjectPageQueryAction";

import { AcsemestersTable as SemestersTable8 } from '../../Components/Acsemester/AcsemestersTable';
import { PublicationsTable as PublicationTable10 } from '../../Components/Publication/PublicationsTable';

export const AcsubjectEditPageContentBase = ({ acsubject, children}) => {
    return (
        <LargeCard acsubject={ acsubject }>
            {/* other data */}
            <EditCard acsubject={ acsubject }/>
        </LargeCard>        
    );    
}

const AcsubjectLazyEditPageContent = Lazy(AcsubjectEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcsubjectEditPage = () => {
    const params = useParams()
    return (<AcsubjectLazyEditPageContent {...params} />)

}
