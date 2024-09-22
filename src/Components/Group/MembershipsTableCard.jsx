// field memberships
// targeting to Membership
// going from Group
import { GroupCardCapsule } from "./GroupCardCapsule";
import { MembershipsTable } from "../Membership/MembershipsTable";
export const GroupMembershipsTableCard = ({ group , ...props}) => {
    return (
        <GroupCardCapsule group={ group } >
            <MembershipsTable memberships={ group?.memberships } {...props}>
            </MembershipsTable>
        </GroupCardCapsule>
    )
}