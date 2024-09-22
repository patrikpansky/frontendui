// field memberships
// targeting to Membership
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { MembershipsCards } from "../Membership/MembershipsCards";
import { UserMembershipsLoadMoreButton as LoadMoreButton} from "../User/MembershipsLoadMoreButton";

export const UserMembershipsCardOfCards = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <UserCardCapsule user={ user } label={"Memberships"}>
            <MembershipsCards memberships={ user?.memberships } {...props} >
                <LoadMoreButton user={ user } skip={skip} limit={limit} orderby={orderby} where={where} />
            </MembershipsCards>
        </UserCardCapsule>
    )
}