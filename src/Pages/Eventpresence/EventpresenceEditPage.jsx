import { useParams } from "react-router-dom"

import { PresenceLazy as Lazy } from "../../Components/Presence/PresenceLazy";
import { PresenceLargeCard as LargeCard } from "../../Components/Presence/PresenceLargeCard";
import { PresenceCardCapsule as CardCapsule } from "../../Components/Presence/PresenceCardCapsule";
import { PresenceEditCard as EditCard } from "../../Components/Presence/PresenceEditCard";

import { 
    EventpresencePageQueryAction as QueryAction,
    EventpresencePageQueryActionValidator as QueryActionValidator
} from "./EventpresencePageQueryAction";


export const EventpresenceEditPageContentBase = ({ eventpresence, children}) => {
    return (
        <LargeCard eventpresence={ eventpresence }>
            {/* other data */}
            <EditCard eventpresence={ eventpresence }/>
        </LargeCard>        
    );    
}

const EventpresenceLazyEditPageContent = Lazy(EventpresenceEditPageContentBase)(QueryAction, QueryActionValidator)

export const EventpresenceEditPage = () => {
    const params = useParams()
    return (<EventpresenceLazyEditPageContent {...params} />)

}
