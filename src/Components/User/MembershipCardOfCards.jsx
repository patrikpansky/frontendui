// field membership
// targeting to Membership
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { MembershipsCards } from "../Membership/MembershipsCards";
import { UserMembershipLoadMoreButton as LoadMoreButton} from "../User/MembershipLoadMoreButton";

export const UserMembershipCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Membership"}>
            <MembershipsCards memberships={ user?.membership } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MembershipsCards>
        </UserCardCapsule>
    )
}