import { useParams } from "react-router-dom"

import { AcclassificationlevelLazy as Lazy } from "../../Components/Acclassificationlevel/AcclassificationlevelLazy";
import { AcclassificationlevelLargeCard as LargeCard } from "../../Components/Acclassificationlevel/AcclassificationlevelLargeCard";
import { AcclassificationlevelCardCapsule as CardCapsule } from "../../Components/Acclassificationlevel/AcclassificationlevelCardCapsule";
import { AcclassificationlevelEditCard as EditCard } from "../../Components/Acclassificationlevel/AcclassificationlevelEditCard";

import { 
    AcclassificationlevelPageQueryAction as QueryAction,
    AcclassificationlevelPageQueryActionValidator as QueryActionValidator
} from "./AcclassificationlevelPageQueryAction";


export const AcclassificationlevelEditPageContentBase = ({ acclassificationlevel, children}) => {
    return (
        <LargeCard acclassificationlevel={ acclassificationlevel }>
            {/* other data */}
            <EditCard acclassificationlevel={ acclassificationlevel }/>
        </LargeCard>        
    );    
}

const AcclassificationlevelLazyEditPageContent = Lazy(AcclassificationlevelEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcclassificationlevelEditPage = () => {
    const params = useParams()
    return (<AcclassificationlevelLazyEditPageContent {...params} />)

}
