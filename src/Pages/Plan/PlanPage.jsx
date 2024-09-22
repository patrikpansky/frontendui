import { useParams } from "react-router-dom"

import { PlanLazy as Lazy } from "../../Components/Plan/PlanLazy";
import { PlanLargeCard as LargeCard } from "../../Components/Plan/PlanLargeCard";
import { PlanCardCapsule as CardCapsule } from "../../Components/Plan/PlanCardCapsule";

import { 
    PlanPageQueryAction as QueryAction,
    PlanPageQueryActionValidator as QueryActionValidator
} from "./PlanPageQueryAction";

import { PlannedlessonsTable as LessonsTable7 } from '../../Components/Plannedlesson/PlannedlessonsTable';

export const PlanPageContentBase = ({ plan, children}) => {
    return (
        <LargeCard plan={ plan }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const PlanPageContent = ({ plan }) => {

        return (
            <PlanPageContentBase plan={ plan }>
                {/* other data */}
                { plan?.lessons?
                    <CardCapsule plan={ plan } label={ "lessons" }>
                        <LessonsTable7 plannedlessons={ plan?.lessons || []}/>
                    </CardCapsule>:null
                }
            </PlanPageContentBase>        
        );    
}

const PlanLazyPageContent = Lazy(PlanPageContent)(QueryAction, QueryActionValidator)

export const PlanPage = () => {
    const params = useParams()
    return (<PlanLazyPageContent {...params} />)

}
