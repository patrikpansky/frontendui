import { useParams } from "react-router-dom"

import { EventtypeLazy as Lazy } from "../../Components/Eventtype/EventtypeLazy";
import { EventtypeLargeCard as LargeCard } from "../../Components/Eventtype/EventtypeLargeCard";
import { EventtypeCardCapsule as CardCapsule } from "../../Components/Eventtype/EventtypeCardCapsule";

import { 
    EventtypePageQueryAction as QueryAction,
    EventtypePageQueryActionValidator as QueryActionValidator
} from "./EventtypePageQueryAction";


export const EventtypePageContentBase = ({ eventtype, children}) => {
    return (
        <LargeCard eventtype={ eventtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const EventtypePageContent = ({ eventtype }) => {

        return (
            <EventtypePageContentBase eventtype={ eventtype }>
                {/* other data */}
            </EventtypePageContentBase>        
        );    
}

const EventtypeLazyPageContent = Lazy(EventtypePageContent)(QueryAction, QueryActionValidator)

export const EventtypePage = () => {
    const params = useParams()
    return (<EventtypeLazyPageContent {...params} />)

}
