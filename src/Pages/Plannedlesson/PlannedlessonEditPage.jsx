import { useParams } from "react-router-dom"

import { PlannedlessonLazy as Lazy } from "../../Components/Plannedlesson/PlannedlessonLazy";
import { PlannedlessonLargeCard as LargeCard } from "../../Components/Plannedlesson/PlannedlessonLargeCard";
import { PlannedlessonCardCapsule as CardCapsule } from "../../Components/Plannedlesson/PlannedlessonCardCapsule";
import { PlannedlessonEditCard as EditCard } from "../../Components/Plannedlesson/PlannedlessonEditCard";

import { 
    PlannedlessonPageQueryAction as QueryAction,
    PlannedlessonPageQueryActionValidator as QueryActionValidator
} from "./PlannedlessonPageQueryAction";

import { PlannedlessonsTable as LinkedwithTable11 } from '../../Components/Plannedlesson/PlannedlessonsTable';
import { UsersTable as UsersTable12 } from '../../Components/User/UsersTable';
import { GroupsTable as GroupsTable13 } from '../../Components/Group/GroupsTable';
import { FacilitysTable as FacilitiesTable14 } from '../../Components/Facility/FacilitysTable';

export const PlannedlessonEditPageContentBase = ({ plannedlesson, children}) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            <EditCard plannedlesson={ plannedlesson }/>
        </LargeCard>        
    );    
}

const PlannedlessonLazyEditPageContent = Lazy(PlannedlessonEditPageContentBase)(QueryAction, QueryActionValidator)

export const PlannedlessonEditPage = () => {
    const params = useParams()
    return (<PlannedlessonLazyEditPageContent {...params} />)

}
