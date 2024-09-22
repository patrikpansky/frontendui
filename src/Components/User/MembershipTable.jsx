// field membership
// targeting to Membership
// going from User
import { MembershipsTable } from "../Membership/MembershipsTable";
import { MembershipLoadMoreButton } from "../Membership/MembershipLoadMoreButton";

export const UserMembershipTableCard = ({ user, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MembershipsTable membership={ user?.membership } {...props}>
            <MembershipLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </MembershipsTable>
    )
}