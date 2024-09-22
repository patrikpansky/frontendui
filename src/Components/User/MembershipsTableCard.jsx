// field memberships
// targeting to Membership
// going from User
import { UserCardCapsule } from "./UserCardCapsule";
import { MembershipsTable } from "../Membership/MembershipsTable";
export const UserMembershipsTableCard = ({ user , ...props}) => {
    return (
        <UserCardCapsule user={ user } >
            <MembershipsTable memberships={ user?.memberships } {...props}>
            </MembershipsTable>
        </UserCardCapsule>
    )
}