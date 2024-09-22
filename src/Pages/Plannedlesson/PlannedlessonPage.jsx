import { useParams } from "react-router-dom"

import { PlannedlessonLazy as Lazy } from "../../Components/Plannedlesson/PlannedlessonLazy";
import { PlannedlessonLargeCard as LargeCard } from "../../Components/Plannedlesson/PlannedlessonLargeCard";
import { PlannedlessonCardCapsule as CardCapsule } from "../../Components/Plannedlesson/PlannedlessonCardCapsule";

import { 
    PlannedlessonPageQueryAction as QueryAction,
    PlannedlessonPageQueryActionValidator as QueryActionValidator
} from "./PlannedlessonPageQueryAction";

import { PlannedlessonsTable as LinkedwithTable11 } from '../../Components/Plannedlesson/PlannedlessonsTable';
import { UsersTable as UsersTable12 } from '../../Components/User/UsersTable';
import { GroupsTable as GroupsTable13 } from '../../Components/Group/GroupsTable';
import { FacilitysTable as FacilitiesTable14 } from '../../Components/Facility/FacilitysTable';

export const PlannedlessonPageContentBase = ({ plannedlesson, children}) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const PlannedlessonPageContent = ({ plannedlesson }) => {

        return (
            <PlannedlessonPageContentBase plannedlesson={ plannedlesson }>
                {/* other data */}
                { plannedlesson?.linkedWith?
                    <CardCapsule plannedlesson={ plannedlesson } label={ "linkedWith" }>
                        <LinkedwithTable11 plannedlessons={ plannedlesson?.linkedWith || []}/>
                    </CardCapsule>:null
                }
                { plannedlesson?.users?
                    <CardCapsule plannedlesson={ plannedlesson } label={ "users" }>
                        <UsersTable12 users={ plannedlesson?.users || []}/>
                    </CardCapsule>:null
                }
                { plannedlesson?.groups?
                    <CardCapsule plannedlesson={ plannedlesson } label={ "groups" }>
                        <GroupsTable13 groups={ plannedlesson?.groups || []}/>
                    </CardCapsule>:null
                }
                { plannedlesson?.facilities?
                    <CardCapsule plannedlesson={ plannedlesson } label={ "facilities" }>
                        <FacilitiesTable14 facilitys={ plannedlesson?.facilities || []}/>
                    </CardCapsule>:null
                }
            </PlannedlessonPageContentBase>        
        );    
}

const PlannedlessonLazyPageContent = Lazy(PlannedlessonPageContent)(QueryAction, QueryActionValidator)

export const PlannedlessonPage = () => {
    const params = useParams()
    return (<PlannedlessonLazyPageContent {...params} />)

}
