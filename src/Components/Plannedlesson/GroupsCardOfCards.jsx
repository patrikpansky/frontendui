// field groups
// targeting to Group
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { GroupsCards } from "../Group/GroupsCards";
import { PlannedlessonGroupsLoadMoreButton as LoadMoreButton} from "../Plannedlesson/GroupsLoadMoreButton";

export const PlannedlessonGroupsCardOfCards = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={"Groups"}>
            <GroupsCards groups={ plannedlesson?.groups } {...props} >
                <LoadMoreButton plannedlesson={ plannedlesson } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GroupsCards>
        </PlannedlessonCardCapsule>
    )
}