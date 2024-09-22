import { useParams } from "react-router-dom"

import { EventLargeCard as LargeCard } from "../../Components/Event/EventLargeCard";
import { EventCardCapsule as CardCapsule } from "../../Components/Event/EventCardCapsule";
import { 
    EventLazy as Lazy,
} from "../../Components/Event/EventLazy";

import { 
    EventPageQueryAction as QueryAction,
    EventPageQueryActionValidator as QueryActionValidator
} from "./EventPageQueryAction";

// import { GroupsCards as GroupssCards14 } from '../../Components/Group/GroupsCards';
import { EventGroupsCardOfCards as GroupsCards14 } from '../../Components/Event/GroupsCardOfCards';
// import { UsersCards as UserssCards15 } from '../../Components/User/UsersCards';
import { EventUsersCardOfCards as UsersCards15 } from '../../Components/Event/UsersCardOfCards';
// import { PresencesCards as PresencessCards16 } from '../../Components/Presence/PresencesCards';
import { EventPresencesCardOfCards as PresencesCards16 } from '../../Components/Event/PresencesCardOfCards';
// import { EventsCards as SubeventssCards19 } from '../../Components/Event/EventsCards';
import { EventSubeventsCardOfCards as SubeventsCards19 } from '../../Components/Event/SubeventsCardOfCards';
// import { ExternalidsCards as ExternalidssCards20 } from '../../Components/Externalid/ExternalidsCards';
import { EventExternalidsCardOfCards as ExternalidsCards20 } from '../../Components/Event/ExternalidsCardOfCards';

export const EventGroupsPageContent = ({ event }) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            { event?.groups?
                <GroupsCards14 event={ event }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const EventUsersPageContent = ({ event }) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            { event?.users?
                <UsersCards15 event={ event }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const EventPresencesPageContent = ({ event }) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            { event?.presences?
                <PresencesCards16 event={ event }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const EventSubeventsPageContent = ({ event }) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            { event?.subEvents?
                <SubeventsCards19 event={ event }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const EventExternalidsPageContent = ({ event }) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            { event?.externalIds?
                <ExternalidsCards20 event={ event }/>
                :null 
            }
        </LargeCard>        
    );    
}

const EventGroupsLazyPageContent = Lazy(EventGroupsPageContent)(QueryAction, QueryActionValidator)
export const EventGroupsCardPage = () => {
    const params = useParams()
    return (<EventGroupsLazyPageContent {...params} />)
}

const EventUsersLazyPageContent = Lazy(EventUsersPageContent)(QueryAction, QueryActionValidator)
export const EventUsersCardPage = () => {
    const params = useParams()
    return (<EventUsersLazyPageContent {...params} />)
}

const EventPresencesLazyPageContent = Lazy(EventPresencesPageContent)(QueryAction, QueryActionValidator)
export const EventPresencesCardPage = () => {
    const params = useParams()
    return (<EventPresencesLazyPageContent {...params} />)
}

const EventSubeventsLazyPageContent = Lazy(EventSubeventsPageContent)(QueryAction, QueryActionValidator)
export const EventSubeventsCardPage = () => {
    const params = useParams()
    return (<EventSubeventsLazyPageContent {...params} />)
}

const EventExternalidsLazyPageContent = Lazy(EventExternalidsPageContent)(QueryAction, QueryActionValidator)
export const EventExternalidsCardPage = () => {
    const params = useParams()
    return (<EventExternalidsLazyPageContent {...params} />)
}

