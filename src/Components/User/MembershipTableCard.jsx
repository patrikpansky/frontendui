// field membership
// targeting to Membership
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { MembershipsTable } from "../Membership/MembershipsTable";
export const UserMembershipTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <MembershipsTable memberships={ user?.membership } {...props}>
            </MembershipsTable>
        </UserCardCapsule>
    )
}