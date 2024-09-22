// field linkedwith
// targeting to PlannedLesson
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { PlannedlessonsCards } from "../Plannedlesson/PlannedlessonsCards";
import { PlannedlessonLinkedwithLoadMoreButton as LoadMoreButton} from "../Plannedlesson/LinkedwithLoadMoreButton";

export const PlannedlessonLinkedwithCardOfCards = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={"Linkedwith"}>
            <PlannedlessonsCards plannedlessons={ plannedlesson?.linkedwith } {...props} >
                <LoadMoreButton plannedlesson={ plannedlesson } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlannedlessonsCards>
        </PlannedlessonCardCapsule>
    )
}