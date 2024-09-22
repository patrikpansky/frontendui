import { useParams } from "react-router-dom"

import { PresenceLazy as Lazy } from "../../Components/Presence/PresenceLazy";
import { PresenceLargeCard as LargeCard } from "../../Components/Presence/PresenceLargeCard";
import { PresenceCardCapsule as CardCapsule } from "../../Components/Presence/PresenceCardCapsule";

import { 
    EventpresencePageQueryAction as QueryAction,
    EventpresencePageQueryActionValidator as QueryActionValidator
} from "./EventpresencePageQueryAction";


export const EventpresencePageContentBase = ({ eventpresence, children}) => {
    return (
        <LargeCard eventpresence={ eventpresence }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const EventpresencePageContent = ({ eventpresence }) => {

        return (
            <EventpresencePageContentBase eventpresence={ eventpresence }>
                {/* other data */}
            </EventpresencePageContentBase>        
        );    
}

const EventpresenceLazyPageContent = Lazy(EventpresencePageContent)(QueryAction, QueryActionValidator)

export const EventpresencePage = () => {
    const params = useParams()
    return (<EventpresenceLazyPageContent {...params} />)

}
