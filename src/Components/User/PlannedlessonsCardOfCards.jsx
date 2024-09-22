// field plannedlessons
// targeting to PlannedLesson
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { PlannedlessonsCards } from "../Plannedlesson/PlannedlessonsCards";
import { UserPlannedlessonsLoadMoreButton as LoadMoreButton} from "../User/PlannedlessonsLoadMoreButton";

export const UserPlannedlessonsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Plannedlessons"}>
            <PlannedlessonsCards plannedlessons={ user?.plannedlessons } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlannedlessonsCards>
        </UserCardCapsule>
    )
}