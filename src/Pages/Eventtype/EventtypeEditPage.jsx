import { useParams } from "react-router-dom"

import { EventtypeLazy as Lazy } from "../../Components/Eventtype/EventtypeLazy";
import { EventtypeLargeCard as LargeCard } from "../../Components/Eventtype/EventtypeLargeCard";
import { EventtypeCardCapsule as CardCapsule } from "../../Components/Eventtype/EventtypeCardCapsule";
import { EventtypeEditCard as EditCard } from "../../Components/Eventtype/EventtypeEditCard";

import { 
    EventtypePageQueryAction as QueryAction,
    EventtypePageQueryActionValidator as QueryActionValidator
} from "./EventtypePageQueryAction";


export const EventtypeEditPageContentBase = ({ eventtype, children}) => {
    return (
        <LargeCard eventtype={ eventtype }>
            {/* other data */}
            <EditCard eventtype={ eventtype }/>
        </LargeCard>        
    );    
}

const EventtypeLazyEditPageContent = Lazy(EventtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const EventtypeEditPage = () => {
    const params = useParams()
    return (<EventtypeLazyEditPageContent {...params} />)

}
