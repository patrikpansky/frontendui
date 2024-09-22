// field memberof
// targeting to Group
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { GroupsCards } from "../Group/GroupsCards";
import { UserMemberofLoadMoreButton as LoadMoreButton} from "../User/MemberofLoadMoreButton";

export const UserMemberofCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Memberof"}>
            <GroupsCards groups={ user?.memberof } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </GroupsCards>
        </UserCardCapsule>
    )
}