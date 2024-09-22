import { useParams } from "react-router-dom"

import { AcclassificationLazy as Lazy } from "../../Components/Acclassification/AcclassificationLazy";
import { AcclassificationLargeCard as LargeCard } from "../../Components/Acclassification/AcclassificationLargeCard";
import { AcclassificationCardCapsule as CardCapsule } from "../../Components/Acclassification/AcclassificationCardCapsule";

import { 
    AcclassificationPageQueryAction as QueryAction,
    AcclassificationPageQueryActionValidator as QueryActionValidator
} from "./AcclassificationPageQueryAction";


export const AcclassificationPageContentBase = ({ acclassification, children}) => {
    return (
        <LargeCard acclassification={ acclassification }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcclassificationPageContent = ({ acclassification }) => {

        return (
            <AcclassificationPageContentBase acclassification={ acclassification }>
                {/* other data */}
            </AcclassificationPageContentBase>        
        );    
}

const AcclassificationLazyPageContent = Lazy(AcclassificationPageContent)(QueryAction, QueryActionValidator)

export const AcclassificationPage = () => {
    const params = useParams()
    return (<AcclassificationLazyPageContent {...params} />)

}
