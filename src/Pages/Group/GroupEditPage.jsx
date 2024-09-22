import { useParams } from "react-router-dom"

import { GroupLazy as Lazy } from "../../Components/Group/GroupLazy";
import { GroupLargeCard as LargeCard } from "../../Components/Group/GroupLargeCard";
import { GroupCardCapsule as CardCapsule } from "../../Components/Group/GroupCardCapsule";
import { GroupEditCard as EditCard } from "../../Components/Group/GroupEditCard";

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

export const GroupEditPageContentBase = ({ group, children}) => {
    return (
        <LargeCard group={ group }>
            {/* other data */}
            <EditCard group={ group }/>
        </LargeCard>        
    );    
}

const GroupLazyEditPageContent = Lazy(GroupEditPageContentBase)(QueryAction, QueryActionValidator)

export const GroupEditPage = () => {
    const params = useParams()
    return (<GroupLazyEditPageContent {...params} />)

}
