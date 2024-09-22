// field memberships
// targeting to Membership
// going from User
import { MembershipsTable } from "../Membership/MembershipsTable";
import { MembershipLoadMoreButton } from "../Membership/MembershipLoadMoreButton";

export const UserMembershipsTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MembershipsTable membership={ user?.memberships } {...props}>
            <MembershipLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </MembershipsTable>
    )
}