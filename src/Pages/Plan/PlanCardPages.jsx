import { useParams } from "react-router-dom"

import { PlanLargeCard as LargeCard } from "../../Components/Plan/PlanLargeCard";
import { PlanCardCapsule as CardCapsule } from "../../Components/Plan/PlanCardCapsule";
import { 
    PlanLazy as Lazy,
} from "../../Components/Plan/PlanLazy";

import { 
    PlanPageQueryAction as QueryAction,
    PlanPageQueryActionValidator as QueryActionValidator
} from "./PlanPageQueryAction";

// import { PlannedlessonsCards as LessonssCards7 } from '../../Components/Plannedlesson/PlannedlessonsCards';
import { PlanLessonsCardOfCards as LessonsCards7 } from '../../Components/Plan/LessonsCardOfCards';

export const PlanLessonsPageContent = ({ plan }) => {
    return (
        <LargeCard plan={ plan }>
            {/* other data */}
            { plan?.lessons?
                <LessonsCards7 plan={ plan }/>
                :null 
            }
        </LargeCard>        
    );    
}

const PlanLessonsLazyPageContent = Lazy(PlanLessonsPageContent)(QueryAction, QueryActionValidator)
export const PlanLessonsCardPage = () => {
    const params = useParams()
    return (<PlanLessonsLazyPageContent {...params} />)
}

