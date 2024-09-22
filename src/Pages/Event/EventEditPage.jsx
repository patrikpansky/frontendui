import { useParams } from "react-router-dom"

import { EventLazy as Lazy } from "../../Components/Event/EventLazy";
import { EventLargeCard as LargeCard } from "../../Components/Event/EventLargeCard";
import { EventCardCapsule as CardCapsule } from "../../Components/Event/EventCardCapsule";
import { EventEditCard as EditCard } from "../../Components/Event/EventEditCard";

import { 
    EventPageQueryAction as QueryAction,
    EventPageQueryActionValidator as QueryActionValidator
} from "./EventPageQueryAction";

import { GroupsTable as GroupsTable14 } from '../../Components/Group/GroupsTable';
import { UsersTable as UsersTable15 } from '../../Components/User/UsersTable';
import { PresencesTable as PresencesTable16 } from '../../Components/Presence/PresencesTable';
import { EventsTable as SubeventsTable19 } from '../../Components/Event/EventsTable';
import { ExternalidsTable as ExternalidsTable20 } from '../../Components/Externalid/ExternalidsTable';

export const EventEditPageContentBase = ({ event, children}) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            <EditCard event={ event }/>
        </LargeCard>        
    );    
}

const EventLazyEditPageContent = Lazy(EventEditPageContentBase)(QueryAction, QueryActionValidator)

export const EventEditPage = () => {
    const params = useParams()
    return (<EventLazyEditPageContent {...params} />)

}
