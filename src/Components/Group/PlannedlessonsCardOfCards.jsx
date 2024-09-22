// field plannedlessons
// targeting to PlannedLesson
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { PlannedlessonsCards } from "../Plannedlesson/PlannedlessonsCards";
import { GroupPlannedlessonsLoadMoreButton as LoadMoreButton} from "../Group/PlannedlessonsLoadMoreButton";

export const GroupPlannedlessonsCardOfCards = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <GroupCardCapsule group={ group } label={"Plannedlessons"}>
            <PlannedlessonsCards plannedlessons={ group?.plannedlessons } {...props} >
                <LoadMoreButton group={ group } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlannedlessonsCards>
        </GroupCardCapsule>
    )
}