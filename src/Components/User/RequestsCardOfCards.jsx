// field requests
// targeting to Request
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { RequestsCards } from "../Request/RequestsCards";
import { UserRequestsLoadMoreButton as LoadMoreButton} from "../User/RequestsLoadMoreButton";

export const UserRequestsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Requests"}>
            <RequestsCards requests={ user?.requests } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </RequestsCards>
        </UserCardCapsule>
    )
}