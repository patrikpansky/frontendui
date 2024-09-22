import { useParams } from "react-router-dom"

import { GroupLargeCard as LargeCard } from "../../Components/Group/GroupLargeCard";
import { GroupCardCapsule as CardCapsule } from "../../Components/Group/GroupCardCapsule";
import { 
    GroupLazy as Lazy,
} from "../../Components/Group/GroupLazy";

import { 
    GroupPageQueryAction as QueryAction,
    GroupPageQueryActionValidator as QueryActionValidator
} from "./GroupPageQueryAction";

// import { EventsCards as EventssCards1 } from '../../Components/Event/EventsCards';
import { GroupEventsCardOfCards as EventsCards1 } from '../../Components/Group/EventsCardOfCards';
// import { ExternalidsCards as ExternalidssCards2 } from '../../Components/Externalid/ExternalidsCards';
import { GroupExternalidsCardOfCards as ExternalidsCards2 } from '../../Components/Group/ExternalidsCardOfCards';
// import { PlannedlessonsCards as PlannedlessonssCards3 } from '../../Components/Plannedlesson/PlannedlessonsCards';
import { GroupPlannedlessonsCardOfCards as PlannedlessonsCards3 } from '../../Components/Group/PlannedlessonsCardOfCards';
// import { GroupsCards as SubgroupssCards16 } from '../../Components/Group/GroupsCards';
import { GroupSubgroupsCardOfCards as SubgroupsCards16 } from '../../Components/Group/SubgroupsCardOfCards';
// import { MembershipsCards as MembershipssCards18 } from '../../Components/Membership/MembershipsCards';
import { GroupMembershipsCardOfCards as MembershipsCards18 } from '../../Components/Group/MembershipsCardOfCards';
// import { RolesCards as RolessCards19 } from '../../Components/Role/RolesCards';
import { GroupRolesCardOfCards as RolesCards19 } from '../../Components/Group/RolesCardOfCards';

export const GroupEventsPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.events?
                <EventsCards1 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const GroupExternalidsPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.externalIds?
                <ExternalidsCards2 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const GroupPlannedlessonsPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.plannedLessons?
                <PlannedlessonsCards3 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const GroupSubgroupsPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.subgroups?
                <SubgroupsCards16 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const GroupMembershipsPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.memberships?
                <MembershipsCards18 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const GroupRolesPageContent = ({ group }) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            { group?.roles?
                <RolesCards19 group={ group }/>
                :null 
            }
        </LargeCard>        
    );    
}

const GroupEventsLazyPageContent = Lazy(GroupEventsPageContent)(QueryAction, QueryActionValidator)
export const GroupEventsCardPage = () => {
    const params = useParams()
    return (<GroupEventsLazyPageContent {...params} />)
}

const GroupExternalidsLazyPageContent = Lazy(GroupExternalidsPageContent)(QueryAction, QueryActionValidator)
export const GroupExternalidsCardPage = () => {
    const params = useParams()
    return (<GroupExternalidsLazyPageContent {...params} />)
}

const GroupPlannedlessonsLazyPageContent = Lazy(GroupPlannedlessonsPageContent)(QueryAction, QueryActionValidator)
export const GroupPlannedlessonsCardPage = () => {
    const params = useParams()
    return (<GroupPlannedlessonsLazyPageContent {...params} />)
}

const GroupSubgroupsLazyPageContent = Lazy(GroupSubgroupsPageContent)(QueryAction, QueryActionValidator)
export const GroupSubgroupsCardPage = () => {
    const params = useParams()
    return (<GroupSubgroupsLazyPageContent {...params} />)
}

const GroupMembershipsLazyPageContent = Lazy(GroupMembershipsPageContent)(QueryAction, QueryActionValidator)
export const GroupMembershipsCardPage = () => {
    const params = useParams()
    return (<GroupMembershipsLazyPageContent {...params} />)
}

const GroupRolesLazyPageContent = Lazy(GroupRolesPageContent)(QueryAction, QueryActionValidator)
export const GroupRolesCardPage = () => {
    const params = useParams()
    return (<GroupRolesLazyPageContent {...params} />)
}

