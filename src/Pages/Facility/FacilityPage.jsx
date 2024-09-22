import { useParams } from "react-router-dom"

import { FacilityLazy as Lazy } from "../../Components/Facility/FacilityLazy";
import { FacilityLargeCard as LargeCard } from "../../Components/Facility/FacilityLargeCard";
import { FacilityCardCapsule as CardCapsule } from "../../Components/Facility/FacilityCardCapsule";

import { 
    FacilityPageQueryAction as QueryAction,
    FacilityPageQueryActionValidator as QueryActionValidator
} from "./FacilityPageQueryAction";

import { ExternalidsTable as ExternalidsTable1 } from '../../Components/Externalid/ExternalidsTable';
import { FacilitysTable as SubfacilitiesTable17 } from '../../Components/Facility/FacilitysTable';
import { PlannedlessonsTable as PlannedlessonsTable19 } from '../../Components/Plannedlesson/PlannedlessonsTable';

export const FacilityPageContentBase = ({ facility, children}) => {
    return (
        <LargeCard facility={ facility }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FacilityPageContent = ({ facility }) => {

        return (
            <FacilityPageContentBase facility={ facility }>
                {/* other data */}
                { facility?.externalIds?
                    <CardCapsule facility={ facility } label={ "externalIds" }>
                        <ExternalidsTable1 externalids={ facility?.externalIds || []}/>
                    </CardCapsule>:null
                }
                { facility?.subFacilities?
                    <CardCapsule facility={ facility } label={ "subFacilities" }>
                        <SubfacilitiesTable17 facilitys={ facility?.subFacilities || []}/>
                    </CardCapsule>:null
                }
                { facility?.plannedLessons?
                    <CardCapsule facility={ facility } label={ "plannedLessons" }>
                        <PlannedlessonsTable19 plannedlessons={ facility?.plannedLessons || []}/>
                    </CardCapsule>:null
                }
            </FacilityPageContentBase>        
        );    
}

const FacilityLazyPageContent = Lazy(FacilityPageContent)(QueryAction, QueryActionValidator)

export const FacilityPage = () => {
    const params = useParams()
    return (<FacilityLazyPageContent {...params} />)

}
