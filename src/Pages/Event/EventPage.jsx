import { useParams } from "react-router-dom"

import { EventLazy as Lazy } from "../../Components/Event/EventLazy";
import { EventLargeCard as LargeCard } from "../../Components/Event/EventLargeCard";
import { EventCardCapsule as CardCapsule } from "../../Components/Event/EventCardCapsule";

import { 
    EventPageQueryAction as QueryAction,
    EventPageQueryActionValidator as QueryActionValidator
} from "./EventPageQueryAction";

import { GroupsTable as GroupsTable14 } from '../../Components/Group/GroupsTable';
import { UsersTable as UsersTable15 } from '../../Components/User/UsersTable';
import { PresencesTable as PresencesTable16 } from '../../Components/Presence/PresencesTable';
import { EventsTable as SubeventsTable19 } from '../../Components/Event/EventsTable';
import { ExternalidsTable as ExternalidsTable20 } from '../../Components/Externalid/ExternalidsTable';

export const EventPageContentBase = ({ event, children}) => {
    return (
        <LargeCard event={ event }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const EventPageContent = ({ event }) => {

        return (
            <EventPageContentBase event={ event }>
                {/* other data */}
                { event?.groups?
                    <CardCapsule event={ event } label={ "groups" }>
                        <GroupsTable14 groups={ event?.groups || []}/>
                    </CardCapsule>:null
                }
                { event?.users?
                    <CardCapsule event={ event } label={ "users" }>
                        <UsersTable15 users={ event?.users || []}/>
                    </CardCapsule>:null
                }
                { event?.presences?
                    <CardCapsule event={ event } label={ "presences" }>
                        <PresencesTable16 presences={ event?.presences || []}/>
                    </CardCapsule>:null
                }
                { event?.subEvents?
                    <CardCapsule event={ event } label={ "subEvents" }>
                        <SubeventsTable19 events={ event?.subEvents || []}/>
                    </CardCapsule>:null
                }
                { event?.externalIds?
                    <CardCapsule event={ event } label={ "externalIds" }>
                        <ExternalidsTable20 externalids={ event?.externalIds || []}/>
                    </CardCapsule>:null
                }
            </EventPageContentBase>        
        );    
}

const EventLazyPageContent = Lazy(EventPageContent)(QueryAction, QueryActionValidator)

export const EventPage = () => {
    const params = useParams()
    return (<EventLazyPageContent {...params} />)

}
