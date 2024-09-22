import { useParams } from "react-router-dom"

import { FacilitytypeLazy as Lazy } from "../../Components/Facilitytype/FacilitytypeLazy";
import { FacilitytypeLargeCard as LargeCard } from "../../Components/Facilitytype/FacilitytypeLargeCard";
import { FacilitytypeCardCapsule as CardCapsule } from "../../Components/Facilitytype/FacilitytypeCardCapsule";
import { FacilitytypeEditCard as EditCard } from "../../Components/Facilitytype/FacilitytypeEditCard";

import { 
    FacilitytypePageQueryAction as QueryAction,
    FacilitytypePageQueryActionValidator as QueryActionValidator
} from "./FacilitytypePageQueryAction";


export const FacilitytypeEditPageContentBase = ({ facilitytype, children}) => {
    return (
        <LargeCard facilitytype={ facilitytype }>
            {/* other data */}
            <EditCard facilitytype={ facilitytype }/>
        </LargeCard>        
    );    
}

const FacilitytypeLazyEditPageContent = Lazy(FacilitytypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const FacilitytypeEditPage = () => {
    const params = useParams()
    return (<FacilitytypeLazyEditPageContent {...params} />)

}
