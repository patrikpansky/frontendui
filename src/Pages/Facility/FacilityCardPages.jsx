import { useParams } from "react-router-dom"

import { FacilityLargeCard as LargeCard } from "../../Components/Facility/FacilityLargeCard";
import { FacilityCardCapsule as CardCapsule } from "../../Components/Facility/FacilityCardCapsule";
import { 
    FacilityLazy as Lazy,
} from "../../Components/Facility/FacilityLazy";

import { 
    FacilityPageQueryAction as QueryAction,
    FacilityPageQueryActionValidator as QueryActionValidator
} from "./FacilityPageQueryAction";

// import { ExternalidsCards as ExternalidssCards1 } from '../../Components/Externalid/ExternalidsCards';
import { FacilityExternalidsCardOfCards as ExternalidsCards1 } from '../../Components/Facility/ExternalidsCardOfCards';
// import { FacilitysCards as SubfacilitiessCards17 } from '../../Components/Facility/FacilitysCards';
import { FacilitySubfacilitiesCardOfCards as SubfacilitiesCards17 } from '../../Components/Facility/SubfacilitiesCardOfCards';
// import { PlannedlessonsCards as PlannedlessonssCards19 } from '../../Components/Plannedlesson/PlannedlessonsCards';
import { FacilityPlannedlessonsCardOfCards as PlannedlessonsCards19 } from '../../Components/Facility/PlannedlessonsCardOfCards';

export const FacilityExternalidsPageContent = ({ facility }) => {
    return (
        <LargeCard facility={ facility }>
            {/* other data */}
            { facility?.externalIds?
                <ExternalidsCards1 facility={ facility }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const FacilitySubfacilitiesPageContent = ({ facility }) => {
    return (
        <LargeCard facility={ facility }>
            {/* other data */}
            { facility?.subFacilities?
                <SubfacilitiesCards17 facility={ facility }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const FacilityPlannedlessonsPageContent = ({ facility }) => {
    return (
        <LargeCard facility={ facility }>
            {/* other data */}
            { facility?.plannedLessons?
                <PlannedlessonsCards19 facility={ facility }/>
                :null 
            }
        </LargeCard>        
    );    
}

const FacilityExternalidsLazyPageContent = Lazy(FacilityExternalidsPageContent)(QueryAction, QueryActionValidator)
export const FacilityExternalidsCardPage = () => {
    const params = useParams()
    return (<FacilityExternalidsLazyPageContent {...params} />)
}

const FacilitySubfacilitiesLazyPageContent = Lazy(FacilitySubfacilitiesPageContent)(QueryAction, QueryActionValidator)
export const FacilitySubfacilitiesCardPage = () => {
    const params = useParams()
    return (<FacilitySubfacilitiesLazyPageContent {...params} />)
}

const FacilityPlannedlessonsLazyPageContent = Lazy(FacilityPlannedlessonsPageContent)(QueryAction, QueryActionValidator)
export const FacilityPlannedlessonsCardPage = () => {
    const params = useParams()
    return (<FacilityPlannedlessonsLazyPageContent {...params} />)
}

