import { useParams } from "react-router-dom"

import { AcclassificationLazy as Lazy } from "../../Components/Acclassification/AcclassificationLazy";
import { AcclassificationLargeCard as LargeCard } from "../../Components/Acclassification/AcclassificationLargeCard";
import { AcclassificationCardCapsule as CardCapsule } from "../../Components/Acclassification/AcclassificationCardCapsule";
import { AcclassificationEditCard as EditCard } from "../../Components/Acclassification/AcclassificationEditCard";

import { 
    AcclassificationPageQueryAction as QueryAction,
    AcclassificationPageQueryActionValidator as QueryActionValidator
} from "./AcclassificationPageQueryAction";


export const AcclassificationEditPageContentBase = ({ acclassification, children}) => {
    return (
        <LargeCard acclassification={ acclassification }>
            {/* other data */}
            <EditCard acclassification={ acclassification }/>
        </LargeCard>        
    );    
}

const AcclassificationLazyEditPageContent = Lazy(AcclassificationEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcclassificationEditPage = () => {
    const params = useParams()
    return (<AcclassificationLazyEditPageContent {...params} />)

}
