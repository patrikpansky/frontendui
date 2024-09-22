import { useParams } from "react-router-dom"

import { AcclassificationlevelLazy as Lazy } from "../../Components/Acclassificationlevel/AcclassificationlevelLazy";
import { AcclassificationlevelLargeCard as LargeCard } from "../../Components/Acclassificationlevel/AcclassificationlevelLargeCard";
import { AcclassificationlevelCardCapsule as CardCapsule } from "../../Components/Acclassificationlevel/AcclassificationlevelCardCapsule";

import { 
    AcclassificationlevelPageQueryAction as QueryAction,
    AcclassificationlevelPageQueryActionValidator as QueryActionValidator
} from "./AcclassificationlevelPageQueryAction";


export const AcclassificationlevelPageContentBase = ({ acclassificationlevel, children}) => {
    return (
        <LargeCard acclassificationlevel={ acclassificationlevel }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcclassificationlevelPageContent = ({ acclassificationlevel }) => {

        return (
            <AcclassificationlevelPageContentBase acclassificationlevel={ acclassificationlevel }>
                {/* other data */}
            </AcclassificationlevelPageContentBase>        
        );    
}

const AcclassificationlevelLazyPageContent = Lazy(AcclassificationlevelPageContent)(QueryAction, QueryActionValidator)

export const AcclassificationlevelPage = () => {
    const params = useParams()
    return (<AcclassificationlevelLazyPageContent {...params} />)

}
