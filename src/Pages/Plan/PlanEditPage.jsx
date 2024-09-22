import { useParams } from "react-router-dom"

import { PlanLazy as Lazy } from "../../Components/Plan/PlanLazy";
import { PlanLargeCard as LargeCard } from "../../Components/Plan/PlanLargeCard";
import { PlanCardCapsule as CardCapsule } from "../../Components/Plan/PlanCardCapsule";
import { PlanEditCard as EditCard } from "../../Components/Plan/PlanEditCard";

import { 
    PlanPageQueryAction as QueryAction,
    PlanPageQueryActionValidator as QueryActionValidator
} from "./PlanPageQueryAction";

import { PlannedlessonsTable as LessonsTable7 } from '../../Components/Plannedlesson/PlannedlessonsTable';

export const PlanEditPageContentBase = ({ plan, children}) => {
    return (
        <LargeCard plan={ plan }>
            {/* other data */}
            <EditCard plan={ plan }/>
        </LargeCard>        
    );    
}

const PlanLazyEditPageContent = Lazy(PlanEditPageContentBase)(QueryAction, QueryActionValidator)

export const PlanEditPage = () => {
    const params = useParams()
    return (<PlanLazyEditPageContent {...params} />)

}
