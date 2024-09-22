import { useParams } from "react-router-dom"

import { GroupLazy as Lazy } from "../../Components/Group/GroupLazy";
import { GroupLargeCard as LargeCard } from "../../Components/Group/GroupLargeCard";
import { GroupCardCapsule as CardCapsule } from "../../Components/Group/GroupCardCapsule";

import { 
    GroupPageQueryAction as QueryAction,
    GroupPageQueryActionValidator as QueryActionValidator
} from "./GroupPageQueryAction";

import { EventsTable as EventsTable1 } from '../../Components/Event/EventsTable';
import { ExternalidsTable as ExternalidsTable2 } from '../../Components/Externalid/ExternalidsTable';
import { PlannedlessonsTable as PlannedlessonsTable3 } from '../../Components/Plannedlesson/PlannedlessonsTable';
import { GroupsTable as SubgroupsTable16 } from '../../Components/Group/GroupsTable';
import { MembershipsTable as MembershipsTable18 } from '../../Components/Membership/MembershipsTable';
import { RolesTable as RolesTable19 } from '../../Components/Role/RolesTable';

export const GroupPageContentBase = ({ group, children}) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const GroupPageContent = ({ group }) => {

        return (
            <GroupPageContentBase group={ group }>
                {/* other data */}
                { group?.events?
                    <CardCapsule group={ group } label={ "events" }>
                        <EventsTable1 events={ group?.events || []}/>
                    </CardCapsule>:null
                }
                { group?.externalIds?
                    <CardCapsule group={ group } label={ "externalIds" }>
                        <ExternalidsTable2 externalids={ group?.externalIds || []}/>
                    </CardCapsule>:null
                }
                { group?.plannedLessons?
                    <CardCapsule group={ group } label={ "plannedLessons" }>
                        <PlannedlessonsTable3 plannedlessons={ group?.plannedLessons || []}/>
                    </CardCapsule>:null
                }
                { group?.subgroups?
                    <CardCapsule group={ group } label={ "subgroups" }>
                        <SubgroupsTable16 groups={ group?.subgroups || []}/>
                    </CardCapsule>:null
                }
                { group?.memberships?
                    <CardCapsule group={ group } label={ "memberships" }>
                        <MembershipsTable18 memberships={ group?.memberships || []}/>
                    </CardCapsule>:null
                }
                { group?.roles?
                    <CardCapsule group={ group } label={ "roles" }>
                        <RolesTable19 roles={ group?.roles || []}/>
                    </CardCapsule>:null
                }
            </GroupPageContentBase>        
        );    
}

const GroupLazyPageContent = Lazy(GroupPageContent)(QueryAction, QueryActionValidator)

export const GroupPage = () => {
    const params = useParams()
    return (<GroupLazyPageContent {...params} />)

}
