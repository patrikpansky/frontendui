import { useParams } from "react-router-dom"

import { AcclassificationtypeLazy as Lazy } from "../../Components/Acclassificationtype/AcclassificationtypeLazy";
import { AcclassificationtypeLargeCard as LargeCard } from "../../Components/Acclassificationtype/AcclassificationtypeLargeCard";
import { AcclassificationtypeCardCapsule as CardCapsule } from "../../Components/Acclassificationtype/AcclassificationtypeCardCapsule";

import { 
    AcclassificationtypePageQueryAction as QueryAction,
    AcclassificationtypePageQueryActionValidator as QueryActionValidator
} from "./AcclassificationtypePageQueryAction";


export const AcclassificationtypePageContentBase = ({ acclassificationtype, children}) => {
    return (
        <LargeCard acclassificationtype={ acclassificationtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcclassificationtypePageContent = ({ acclassificationtype }) => {

        return (
            <AcclassificationtypePageContentBase acclassificationtype={ acclassificationtype }>
                {/* other data */}
            </AcclassificationtypePageContentBase>        
        );    
}

const AcclassificationtypeLazyPageContent = Lazy(AcclassificationtypePageContent)(QueryAction, QueryActionValidator)

export const AcclassificationtypePage = () => {
    const params = useParams()
    return (<AcclassificationtypeLazyPageContent {...params} />)

}
