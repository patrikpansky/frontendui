// field lessons
// targeting to PlannedLesson
// going from Plan
import { PlanCardCapsule } from "./PlanCardCapsule";
import { PlannedlessonsCards } from "../Plannedlesson/PlannedlessonsCards";
import { PlanLessonsLoadMoreButton as LoadMoreButton} from "../Plan/LessonsLoadMoreButton";

export const PlanLessonsCardOfCards = ({ plan, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlanCardCapsule plan={ plan } label={"Lessons"}>
            <PlannedlessonsCards plannedlessons={ plan?.lessons } {...props} >
                <LoadMoreButton plan={ plan } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlannedlessonsCards>
        </PlanCardCapsule>
    )
}