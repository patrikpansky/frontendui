import { useParams } from "react-router-dom"

import { FacilitytypeLazy as Lazy } from "../../Components/Facilitytype/FacilitytypeLazy";
import { FacilitytypeLargeCard as LargeCard } from "../../Components/Facilitytype/FacilitytypeLargeCard";
import { FacilitytypeCardCapsule as CardCapsule } from "../../Components/Facilitytype/FacilitytypeCardCapsule";

import { 
    FacilitytypePageQueryAction as QueryAction,
    FacilitytypePageQueryActionValidator as QueryActionValidator
} from "./FacilitytypePageQueryAction";


export const FacilitytypePageContentBase = ({ facilitytype, children}) => {
    return (
        <LargeCard facilitytype={ facilitytype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const FacilitytypePageContent = ({ facilitytype }) => {

        return (
            <FacilitytypePageContentBase facilitytype={ facilitytype }>
                {/* other data */}
            </FacilitytypePageContentBase>        
        );    
}

const FacilitytypeLazyPageContent = Lazy(FacilitytypePageContent)(QueryAction, QueryActionValidator)

export const FacilitytypePage = () => {
    const params = useParams()
    return (<FacilitytypeLazyPageContent {...params} />)

}
