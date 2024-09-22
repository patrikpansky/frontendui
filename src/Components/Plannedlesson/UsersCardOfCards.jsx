// field users
// targeting to User
// going from Plannedlesson
import { PlannedlessonCardCapsule } from "./PlannedlessonCardCapsule";
import { UsersCards } from "../User/UsersCards";
import { PlannedlessonUsersLoadMoreButton as LoadMoreButton} from "../Plannedlesson/UsersLoadMoreButton";

export const PlannedlessonUsersCardOfCards = ({ plannedlesson, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PlannedlessonCardCapsule plannedlesson={ plannedlesson } label={"Users"}>
            <UsersCards users={ plannedlesson?.users } {...props} >
                <LoadMoreButton plannedlesson={ plannedlesson } skip={skip} limit={limit} orderby={orderby} where={where} />
            </UsersCards>
        </PlannedlessonCardCapsule>
    )
}