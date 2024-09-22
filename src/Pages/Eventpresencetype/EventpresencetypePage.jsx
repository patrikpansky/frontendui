import { useParams } from "react-router-dom"

import { PresencetypeLazy as Lazy } from "../../Components/Presencetype/PresencetypeLazy";
import { PresencetypeLargeCard as LargeCard } from "../../Components/Presencetype/PresencetypeLargeCard";
import { PresencetypeCardCapsule as CardCapsule } from "../../Components/Presencetype/PresencetypeCardCapsule";

import { 
    EventpresencetypePageQueryAction as QueryAction,
    EventpresencetypePageQueryActionValidator as QueryActionValidator
} from "./EventpresencetypePageQueryAction";


export const EventpresencetypePageContentBase = ({ eventpresencetype, children}) => {
    return (
        <LargeCard eventpresencetype={ eventpresencetype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const EventpresencetypePageContent = ({ eventpresencetype }) => {

        return (
            <EventpresencetypePageContentBase eventpresencetype={ eventpresencetype }>
                {/* other data */}
            </EventpresencetypePageContentBase>        
        );    
}

const EventpresencetypeLazyPageContent = Lazy(EventpresencetypePageContent)(QueryAction, QueryActionValidator)

export const EventpresencetypePage = () => {
    const params = useParams()
    return (<EventpresencetypeLazyPageContent {...params} />)

}
