import { useParams } from "react-router-dom"

import { FacilityLazy as Lazy } from "../../Components/Facility/FacilityLazy";
import { FacilityLargeCard as LargeCard } from "../../Components/Facility/FacilityLargeCard";
import { FacilityCardCapsule as CardCapsule } from "../../Components/Facility/FacilityCardCapsule";
import { FacilityEditCard as EditCard } from "../../Components/Facility/FacilityEditCard";

import { 
    FacilityPageQueryAction as QueryAction,
    FacilityPageQueryActionValidator as QueryActionValidator
} from "./FacilityPageQueryAction";

import { ExternalidsTable as ExternalidsTable1 } from '../../Components/Externalid/ExternalidsTable';
import { FacilitysTable as SubfacilitiesTable17 } from '../../Components/Facility/FacilitysTable';
import { PlannedlessonsTable as PlannedlessonsTable19 } from '../../Components/Plannedlesson/PlannedlessonsTable';

export const FacilityEditPageContentBase = ({ facility, children}) => {
    return (
        <LargeCard facility={ facility }>
            {/* other data */}
            <EditCard facility={ facility }/>
        </LargeCard>        
    );    
}

const FacilityLazyEditPageContent = Lazy(FacilityEditPageContentBase)(QueryAction, QueryActionValidator)

export const FacilityEditPage = () => {
    const params = useParams()
    return (<FacilityLazyEditPageContent {...params} />)

}
