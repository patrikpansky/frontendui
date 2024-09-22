// field memberships
// targeting to Membership
// going from Group
import { MembershipsTable } from "../Membership/MembershipsTable";
import { MembershipLoadMoreButton } from "../Membership/MembershipLoadMoreButton";

export const GroupMembershipsTableCard = ({ group, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <MembershipsTable membership={ group?.memberships } {...props}>
            <MembershipLoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </MembershipsTable>
    )
}