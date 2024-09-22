import { useParams } from "react-router-dom"

import { AcclassificationtypeLazy as Lazy } from "../../Components/Acclassificationtype/AcclassificationtypeLazy";
import { AcclassificationtypeLargeCard as LargeCard } from "../../Components/Acclassificationtype/AcclassificationtypeLargeCard";
import { AcclassificationtypeCardCapsule as CardCapsule } from "../../Components/Acclassificationtype/AcclassificationtypeCardCapsule";
import { AcclassificationtypeEditCard as EditCard } from "../../Components/Acclassificationtype/AcclassificationtypeEditCard";

import { 
    AcclassificationtypePageQueryAction as QueryAction,
    AcclassificationtypePageQueryActionValidator as QueryActionValidator
} from "./AcclassificationtypePageQueryAction";


export const AcclassificationtypeEditPageContentBase = ({ acclassificationtype, children}) => {
    return (
        <LargeCard acclassificationtype={ acclassificationtype }>
            {/* other data */}
            <EditCard acclassificationtype={ acclassificationtype }/>
        </LargeCard>        
    );    
}

const AcclassificationtypeLazyEditPageContent = Lazy(AcclassificationtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcclassificationtypeEditPage = () => {
    const params = useParams()
    return (<AcclassificationtypeLazyEditPageContent {...params} />)

}
